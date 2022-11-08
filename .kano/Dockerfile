# syntax=docker/dockerfile:1
FROM ghcr.io/logisparte/helot-22.04:6.0.1 AS base

LABEL org.opencontainers.image.title="agoge-dev"
LABEL org.opencontainers.image.description="agoge's development image"
LABEL org.opencontainers.image.authors="@logisparte"
LABEL org.opencontainers.image.source="https://github.com/logisparte/agoge"

FROM base AS go

ARG TARGETARCH

ENV GOBIN="/usr/bin"
ENV GOPATH="/usr/lib/go"
ENV GOPROXY="direct"

RUN <<EOF
  case "$TARGETARCH" in
    amd64)
      GO_ARCHITECTURE="amd64"
      ;;

    arm64*)
      GO_ARCHITECTURE="arm64"
      ;;

    *)
      echo "Unknown target architecture: $TARGETARCH" >&2
      exit 1
      ;;
  esac

  curl --silent --show-error --location \
    "https://golang.org/dl/go1.18.3.linux-$GO_ARCHITECTURE.tar.gz" \
      | sudo tar --directory /opt --extract --gzip
  sudo ln -s "/opt/go/bin/go" "/usr/bin/go"
EOF

FROM go AS shfmt

RUN <<EOF
  sudo -E go install mvdan.cc/sh/v3/cmd/shfmt@v3.5.1
EOF

FROM shfmt AS shellcheck

RUN <<EOF
  DEBIAN_FRONTEND=noninteractive \
  sudo apt-get update \
  && sudo apt-get install --yes --quiet --no-install-recommends \
    shellcheck
EOF

FROM shellcheck AS nodejs

RUN <<EOF
  curl --silent --show-error --location https://deb.nodesource.com/setup_lts.x \
    | sudo bash -
  DEBIAN_FRONTEND=noninteractive \
  sudo apt-get update \
  && sudo apt-get install --yes --quiet --no-install-recommends \
    nodejs
  sudo npm config set update-notifier=false fund=false
EOF

FROM nodejs AS commitlint

RUN <<EOF
  sudo npm install --location=global --omit=dev --omit=optional \
    @commitlint/cli@17.0.3
EOF

FROM commitlint AS prettier

RUN <<EOF
  sudo npm install --location=global --omit=dev --omit=optional \
    prettier@2.7.1
EOF

FROM prettier AS markdownlint

RUN <<EOF
  sudo npm install --location=global --omit=dev --omit=optional \
    markdownlint-cli@0.31.1
EOF

FROM markdownlint AS cleanup

RUN <<EOF
  sudo -E go clean --cache
  sudo npm cache clean --force
  sudo apt-get clean
  sudo rm -rf /var/lib/apt/lists/*
EOF
