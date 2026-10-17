"""Gera várias falas com o OmniVoice num único processo (o modelo carrega uma vez só).

Uso: python omnivoice_falas.py lista.json
lista.json: [{"arquivo": "saida.wav", "texto": "...", "voz": "female, young adult"}, ...]
"voz" é uma descrição (voice design; vira uma voz de referência fixa, igual em todas as falas) ou "clone:<audio_ref>|<texto_do_audio_ref>".
"""
import hashlib
import json
import os
import sys

import soundfile as sf
import torch
from omnivoice import OmniVoice

itens = json.load(open(sys.argv[1], encoding="utf-8"))
modelo = OmniVoice.from_pretrained("k2-fsa/OmniVoice", device_map="cuda" if torch.cuda.is_available() else "cpu")
pasta = os.path.dirname(os.path.abspath(sys.argv[1]))
REF_TEXTO = "Olá! Este é o podcast Redação 1000. Hoje a gente conversa sobre repertório para a redação do ENEM."
clones = {}


def prompt_da_voz(voz):
    """Mesma voz em todas as falas: descrições viram uma referência fixa, gerada uma vez e clonada."""
    if voz in clones:
        return clones[voz]
    if voz.startswith("clone:"):
        ref_audio, ref_text = voz[len("clone:"):].split("|", 1)
    else:
        nome = "ref-" + hashlib.sha1(voz.encode()).hexdigest()[:12] + ".wav"
        ref_audio, ref_text = os.path.join(pasta, nome), REF_TEXTO
        if not os.path.exists(ref_audio):
            torch.manual_seed(1000)
            sf.write(ref_audio, modelo.generate(text=REF_TEXTO, language="pt", instruct=voz)[0], 24000)
    clones[voz] = modelo.create_voice_clone_prompt(ref_audio=ref_audio, ref_text=ref_text)
    return clones[voz]


for n, item in enumerate(itens, 1):
    args = {"text": item["texto"], "language": "pt", "voice_clone_prompt": prompt_da_voz(item["voz"])}
    audio = modelo.generate(**args)[0]
    sf.write(item["arquivo"], audio, 24000)
    print(f"{n}/{len(itens)}", flush=True)
