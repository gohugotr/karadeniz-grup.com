var hizmetler = [
{{ range $index, $page := (where .Site.Pages "Section" "hizmetler") -}}
  {
    id: {{ $index }},
    title: "{{ .Title }}",
    description: "{{ .Params.description }}",
    href: "{{ .URL | relURL }}"
  },
{{ end -}}
];