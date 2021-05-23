var belgeler = [
{{ range $index, $page := (where .Site.Pages "Section" "belgeler") -}}
  {
    id: {{ $index }},
    title: "{{ .Title }}",
    description: "{{ .Params.description }}",
    href: "{{ .URL | relURL }}"
  },
{{ end -}}
];