# Issue tracker: GitHub

Задачи и спецификации:
https://github.com/alexdermenji/ai-for-developers-project-386/issues

Использовать gh CLI из корня репозитория.

- Создание: gh issue create --title "..." --body-file <file>
- Чтение: gh issue view <number> --json number,title,body,labels,comments
- Список: gh issue list --state open
- Метки: gh issue edit <number> --add-label "..."
- Комментарий: gh issue comment <number> --body-file <file>
- Закрытие: gh issue close <number>

«Опубликовать в трекере» означает создать GitHub Issue.
«Прочитать тикет» означает прочитать соответствующий Issue.

PRs as a request surface: no.

Для wayfinder карта решений — Issue с меткой wayfinder:map.
Тикеты связывать с картой через sub-issues; если недоступно,
использовать список задач в карте и строку Part of #<map> в тикете.
Зависимости фиксировать через GitHub issue dependencies;
если недоступно — строкой Blocked by: #<number>.
