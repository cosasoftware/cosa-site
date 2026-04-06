mkdir -p public/shots
cat > public/shots/manifest.json <<'JSON'
{
  "order": ["property", "legal", "pharmacy", "engineering", "lawbeat", "unity"],
  "titles": {
    "pharmacy": "Pharmacy (Priya)"
  },
  "images": {
    "property":    ["property/01.png"],
    "legal":       ["legal/01.png"],
    "pharmacy":    ["pharmacy/01.png"],
    "engineering": ["engineering/01.png"],
    "lawbeat":     ["lawbeat/01.png"],
    "unity":       ["unity/01.png"]
  }
}
JSON
