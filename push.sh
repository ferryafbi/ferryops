#!/bin/bash

tanggal=$(date +'%Y-%m-%d')
waktu=$(date +'%H:%M:%S')

pesan_commit="new post ($tanggal $waktu)"
# output new post (2023-05-20 20:30:24)

# npm run build
git add .
# git commit -m "$pesan_commit"
git commit -m "add pencatat tugas"
git push
