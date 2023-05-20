#!/bin/bash

tanggal=$(date +'%Y-%m-%d')
waktu=$(date +'%H:%M:%S')

pesan_commit="new post ($tanggal $waktu)"

git add .
git commit -m "$pesan_commit"
git push