# Docker & Kubernetes Assessment Report

> [!TIP]
> Use this document to explain your design choices, optimisations and any challenges you faced.

## Dockerfile

### Design Decisions

**Optimized for**: Image size, security, and build caching.

- **Multi-stage build**: Separates build (with TypeScript) and production (runtime only) to reduce final image size
- **Alpine base**: Smaller footprint (~200MB vs 500MB+)
- **Layer caching**: Package files copied before source code for faster rebuilds
- **Security**: Non-root user, production dependencies only
- **Health check**: Integrated `/health` endpoint for orchestration
- **.dockerignore**: Excludes unnecessary files for smaller build context

### Forked repository

<!-- TODO: If you submitted your changes to a fork, replace with your forked repository -->
`https://github.com/your-username/academic-calendar-api`

## Kubernetes

<!-- TODO: Document your process for deploying Navidrome on Kubernetes -->
