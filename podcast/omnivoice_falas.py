"""Gera várias falas com o OmniVoice num único processo (o modelo carrega uma vez só).

Uso: python omnivoice_falas.py lista.json
lista.json: [{"arquivo": "saida.wav", "texto": "...", "voz": "female, young adult"}, ...]
"voz" é uma descrição (voice design) ou "clone:<audio_ref>|<texto_do_audio_ref>".
"""
import json
import sys

import soundfile as sf
import torch
from omnivoice import OmniVoice

itens = json.load(open(sys.argv[1], encoding="utf-8"))
modelo = OmniVoice.from_pretrained("k2-fsa/OmniVoice", device_map="cuda" if torch.cuda.is_available() else "cpu")
clones = {}
for n, item in enumerate(itens, 1):
    voz = item["voz"]
    args = {"text": item["texto"], "language": "pt"}
    if voz.startswith("clone:"):
        if voz not in clones:
            ref_audio, ref_text = voz[len("clone:"):].split("|", 1)
            clones[voz] = modelo.create_voice_clone_prompt(ref_audio=ref_audio, ref_text=ref_text)
        args["voice_clone_prompt"] = clones[voz]
    else:
        args["instruct"] = voz
    audio = modelo.generate(**args)[0]
    sf.write(item["arquivo"], audio, 24000)
    print(f"{n}/{len(itens)}", flush=True)
