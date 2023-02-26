# Simplest docker image from microsoft
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:16

# Set locale for Tokyo
RUN apt-get install -y locales \
    && sed -i '/^#.* ja_JP.UTF-8 /s/^#//' /etc/locale.gen \
    && locale-gen \
    && ln -fs /usr/share/zoneinfo/Asia/Tokyo /etc/localtime\
    && dpkg-reconfigure -f noninteractive tzdata
ENV LANG="ja_JP.UTF-8"