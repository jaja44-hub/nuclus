 # .github/workflows/ingest-cron.yml
name: Knowledge Ingestion (Cron)
on:
  schedule:
    - cron: "0 */12 * * *" # every 12 hours
  workflow_dispatch:
jobs:
  ingest:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Firebase Function (HTTP)
        run: echo "Call your HTTPS endpoint or skip if Functions schedule is enabled."
