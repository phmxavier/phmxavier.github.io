---
name: /architecture-refresh
description: "Revisa alteração de código e atualiza apenas a documentação afetada, criando ADR se necessário."
files:
  - docs/architecture/00-overview.md
  - docs/architecture/01-context-and-domain.md
  - docs/architecture/02-main-components.md
  - docs/business/glossary.md
  - docs/business/personas.md
  - docs/business/main-use-cases.md
  - docs/decisions/adr-XXXX-titulo.md
---
Com base no diff/mudança fornecida (utilize o git para comparar as mudanças desta brach com a main):
1. Identifique componentes e documentos afetados (overview, contexto, componentes, business docs, ADRs).
2. Liste impactos detectados e dúvidas antes de editar.
3. Proponha e aplique atualizações apenas nos arquivos pertinentes, mantendo consistência com convenções existentes.
4. Caso a alteração represente decisão arquitetural, gere um novo ADR seguindo o template oficial.
5. Entregue resumo final citando arquivos modificados, links cruzados e itens pendentes.
