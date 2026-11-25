/* FB Einstieg v0.1 — начало Forumsbeitrag (блоки 1–5b). Собрано из FB v0.2 (build_einstieg.py). К каждой немецкой строке — русский перевод. */
const DATA_VERSION = "0.1";
const HEADS = [
 {
  "k": "V",
  "de": "die beiden Vorschläge",
  "dat": "den beiden Vorschlägen",
  "ru": "оба предложения",
  "ruO": "об обоих предложениях",
  "frage": "Выбор из двух вариантов (entweder … oder, statt)?"
 },
 {
  "k": "K",
  "de": "die neuen Kosten",
  "dat": "den neuen Kosten",
  "ru": "новые расходы",
  "ruO": "о новых расходах",
  "frage": "Платим мы сами?"
 },
 {
  "k": "F",
  "de": "die neue Pflicht",
  "dat": "der neuen Pflicht",
  "ru": "новая обязанность",
  "ruO": "о новой обязанности",
  "frage": "Обязывают что-то делать?"
 },
 {
  "k": "E",
  "de": "die neuen Einschränkungen",
  "dat": "den neuen Einschränkungen",
  "ru": "новые ограничения",
  "ruO": "о новых ограничениях",
  "frage": "Что-то отнимают, урезают, запрещают?"
 },
 {
  "k": "U",
  "de": "die geplante Umstellung",
  "dat": "der geplanten Umstellung",
  "ru": "планируемая перестройка",
  "ruO": "о планируемой перестройке",
  "frage": "Меняют, как устроена работа?"
 },
 {
  "k": "A",
  "de": "das neue Angebot",
  "dat": "dem neuen Angebot",
  "ru": "новое предложение",
  "ruO": "о новом предложении",
  "frage": "Фирма что-то даёт?"
 },
 {
  "k": "P",
  "de": "die neuen Pläne",
  "dat": "den neuen Plänen",
  "ru": "новые планы",
  "ruO": "о новых планах",
  "frage": "Не уверен или тема смешанная — джокер, подходит всегда"
 }
];
const TAILS = [
 {
  "k": "A",
  "de": "[X] soll es dann nicht mehr geben.",
  "ru": "[X] тогда больше не будет.",
  "frage": "Что-то исчезнет",
  "x": "что пропадёт: множественное число без артикля (Fleischgerichte, Freie Samstage)"
 },
 {
  "k": "B",
  "de": "Die Teilnahme wäre dann für alle Pflicht.",
  "ru": "Участие тогда было бы обязательным для всех.",
  "frage": "Обязаловка (курс, собрание, работа в саду)",
  "x": "ничего; если вне работы — добавь «– und zwar nach Feierabend» (причём после работы)"
 },
 {
  "k": "V",
  "de": "[X] müssten wir aus eigener Tasche bezahlen.",
  "ru": "[X] нам пришлось бы платить из своего кармана.",
  "frage": "Платим мы",
  "x": "за что платим: Die Reinigung (чистку), Das Essen (еду), Die Hälfte (половину)"
 },
 {
  "k": "G",
  "de": "Geplant ist [ein / eine X].",
  "ru": "Планируется [X].",
  "frage": "Фирма что-то даёт",
  "x": "что дают: eine eigene Kita (свой детсад); много — Geplant sind …"
 },
 {
  "k": "D",
  "de": "Beides zusammen soll es leider nicht geben.",
  "ru": "И то и другое вместе, к сожалению, не дадут.",
  "frage": "Выбор из двух",
  "x": "ничего"
 },
 {
  "k": "J",
  "de": "Die Änderung soll schon bald für alle gelten.",
  "ru": "Изменение скоро должно действовать для всех.",
  "frage": "Ничего не придумал — джокер",
  "x": "ничего"
 }
];
const GRUENDE = [
 {
  "k": "kosten",
  "frage": "Платит фирма — твой джокер «дорого и сложно»",
  "de": "die Umsetzung große finanzielle Mittel und einen hohen organisatorischen Aufwand erfordert",
  "ru": "реализация требует больших финансовых средств и высоких организационных затрат",
  "h": "orig"
 },
 {
  "k": "belastung",
  "frage": "Платим мы",
  "de": "dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht",
  "ru": "для сотрудников из-за этого возникает дополнительная финансовая нагрузка",
  "h": "ok"
 },
 {
  "k": "freizeit",
  "frage": "Отнимают свободное время",
  "de": "die Mitarbeiter dadurch einen Teil ihrer Freizeit opfern müssten",
  "ru": "сотрудникам пришлось бы пожертвовать частью свободного времени",
  "h": "ok"
 },
 {
  "k": "passt",
  "frage": "Денег нет — но правило подходит не всем",
  "de": "eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind",
  "ru": "такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные",
  "h": "ok"
 },
 {
  "k": "druck",
  "frage": "Давление, контроль, наказания",
  "de": "dadurch ein erheblicher Druck auf die Mitarbeiter entsteht",
  "ru": "из-за этого на сотрудников ложится сильное давление",
  "h": "ok"
 },
 {
  "k": "mehraufwand",
  "frage": "Коллегам больше работы",
  "de": "dadurch ein erheblicher Mehraufwand für die Kollegen entsteht",
  "ru": "из-за этого у коллег появляется много дополнительной работы",
  "h": "ok"
 }
];
const LOSS = [
 {
  "k": "geld",
  "de": "Gerade Kollegen mit geringerem Einkommen können sich solche zusätzlichen Kosten kaum leisten.",
  "ru": "Именно коллеги с меньшим доходом едва ли могут позволить себе такие дополнительные расходы.",
  "frage": "деньги"
 },
 {
  "k": "zeit",
  "de": "Nach einem langen Arbeitstag brauchen wir den Feierabend, um uns zu erholen und Zeit mit der Familie zu verbringen.",
  "ru": "После долгого рабочего дня нам нужен вечер, чтобы отдохнуть и провести время с семьёй.",
  "frage": "время"
 },
 {
  "k": "wohl",
  "de": "Auf Dauer würden darunter unser Wohlbefinden und unsere Leistungsfähigkeit leiden.",
  "ru": "Со временем от этого пострадали бы наше самочувствие и работоспособность.",
  "frage": "самочувствие, нагрузка"
 },
 {
  "k": "essen",
  "de": "Jeder hat andere Essgewohnheiten, und die Pause dient schließlich der Erholung.",
  "ru": "У каждого свои пищевые привычки, а перерыв в конце концов служит отдыху.",
  "frage": "еда, перерывы"
 },
 {
  "k": "klima",
  "de": "Ein gutes Betriebsklima entsteht durch Wertschätzung und nicht durch Vorschriften.",
  "ru": "Хорошая атмосфера на работе возникает из уважения, а не из предписаний.",
  "frage": "атмосфера в команде"
 },
 {
  "k": "konz",
  "de": "Bei ständiger Ablenkung und einem hohen Lärmpegel kann niemand konzentriert arbeiten.",
  "ru": "При постоянном отвлечении и высоком уровне шума никто не может работать сосредоточенно.",
  "frage": "концентрация"
 },
 {
  "k": "vertrauen",
  "de": "Strenge Kontrollen zerstören das Vertrauen und die Eigenverantwortung der Mitarbeiter.",
  "ru": "Строгий контроль разрушает доверие и самостоятельность сотрудников.",
  "frage": "доверие, контроль"
 },
 {
  "k": "umwelt",
  "de": "Umweltschutz ist wichtig, aber er darf nicht allein auf Kosten der Mitarbeiter gehen.",
  "ru": "Защита окружающей среды важна, но она не должна идти только за счёт сотрудников.",
  "frage": "тема про экологию"
 },
 {
  "k": "bildung",
  "de": "Eine Weiterbildung bringt nur dann etwas, wenn sie zur eigenen Tätigkeit passt.",
  "ru": "Обучение приносит пользу только тогда, когда оно подходит к собственной работе.",
  "frage": "тема про обучение"
 }
];
const THEMEN = [
 {
  "n": 1,
  "titel": "Kleiderordnung",
  "typ": "T2",
  "aufgabe": "Alle Mitarbeiter in Ihrer Firma sollen einheitliche Kleidung tragen. Die Reinigungskosten soll aber jeder privat übernehmen.",
  "aufgabeRu": "Все сотрудники вашей фирмы должны носить одинаковую одежду. Однако расходы на чистку каждый оплачивает сам.",
  "kopf": "K",
  "alt": [],
  "wort": "Arbeitskleidung",
  "wortRu": "рабочей одежды",
  "thema": {
   "de": "die neuen Kosten in Sachen Arbeitskleidung",
   "ru": "о новых расходах насчёт рабочей одежды"
  },
  "exakt": {
   "de": "die neue Kleiderordnung",
   "ru": "новый дресс-код"
  },
  "tail": "V",
  "feierabend": false,
  "inhalt": {
   "de": "Die Reinigung müssten wir aus eigener Tasche bezahlen.",
   "ru": "Чистку нам пришлось бы платить из своего кармана."
  },
  "grund": "belastung",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Kosten in Sachen Arbeitskleidung⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых расходах насчёт рабочей одежды⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Die Reinigung müssten wir aus eigener Tasche bezahlen.⟧",
    "ru": "⟦Чистку нам пришлось бы платить из своего кармана.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦для сотрудников из-за этого возникает дополнительная финансовая нагрузка⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Gerade Kollegen mit geringerem Einkommen können sich solche zusätzlichen Kosten kaum leisten.⟧",
    "ru": "⟦Именно коллеги с меньшим доходом едва ли могут позволить себе такие дополнительные расходы.⟧",
    "h": "neu"
   }
  ],
  "woerter": 70
 },
 {
  "n": 2,
  "titel": "Samstagsarbeit",
  "typ": "T1",
  "aufgabe": "Alle Mitarbeiter in Ihrer Firma sollen in Zukunft auch samstags arbeiten. Es gibt keinen Zuschlag.",
  "aufgabeRu": "Все сотрудники вашей фирмы в будущем должны работать и по субботам. Доплаты нет.",
  "kopf": "F",
  "alt": [],
  "wort": "Wochenendarbeit",
  "wortRu": "работы в выходные",
  "thema": {
   "de": "die neue Pflicht in Sachen Wochenendarbeit",
   "ru": "о новой обязанности насчёт работы в выходные"
  },
  "exakt": {
   "de": "die geplante Samstagsarbeit",
   "ru": "планируемая работа по субботам"
  },
  "tail": "A",
  "feierabend": false,
  "inhalt": {
   "de": "Freie Samstage soll es dann nicht mehr geben.",
   "ru": "Свободных суббот тогда больше не будет."
  },
  "grund": "freizeit",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neue Pflicht in Sachen Wochenendarbeit⟧ gestritten.",
    "ru": "В команде спорят ⟦о новой обязанности насчёт работы в выходные⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Freie Samstage soll es dann nicht mehr geben.⟧",
    "ru": "⟦Свободных суббот тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Mitarbeiter dadurch einen Teil ihrer Freizeit opfern müssten⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦сотрудникам пришлось бы пожертвовать частью свободного времени⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Nach einem langen Arbeitstag brauchen wir den Feierabend, um uns zu erholen und Zeit mit der Familie zu verbringen.⟧",
    "ru": "⟦После долгого рабочего дня нам нужен вечер, чтобы отдохнуть и провести время с семьёй.⟧",
    "h": "neu"
   }
  ],
  "woerter": 77
 },
 {
  "n": 3,
  "titel": "Zeitmanagement",
  "typ": "T1",
  "aufgabe": "Alle Mitarbeiter sollen an einem Workshop für Zeitmanagement teilnehmen.",
  "aufgabeRu": "Все сотрудники должны принять участие в семинаре по тайм-менеджменту.",
  "kopf": "F",
  "alt": [],
  "wort": "Zeitmanagement",
  "wortRu": "тайм-менеджмента",
  "thema": {
   "de": "die neue Pflicht in Sachen Zeitmanagement",
   "ru": "о новой обязанности насчёт тайм-менеджмента"
  },
  "exakt": null,
  "tail": "B",
  "feierabend": false,
  "inhalt": {
   "de": "Die Teilnahme wäre dann für alle Pflicht.",
   "ru": "Участие тогда было бы обязательным для всех."
  },
  "grund": "kosten",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neue Pflicht in Sachen Zeitmanagement⟧ gestritten.",
    "ru": "В команде спорят ⟦о новой обязанности насчёт тайм-менеджмента⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Die Teilnahme wäre dann für alle Pflicht.⟧",
    "ru": "⟦Участие тогда было бы обязательным для всех.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Umsetzung große finanzielle Mittel und einen hohen organisatorischen Aufwand erfordert⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦реализация требует больших финансовых средств и высоких организационных затрат⟧.",
    "h": "orig"
   },
   {
    "id": "5b",
    "de": "⟦Eine Weiterbildung bringt nur dann etwas, wenn sie zur eigenen Tätigkeit passt.⟧",
    "ru": "⟦Обучение приносит пользу только тогда, когда оно подходит к собственной работе.⟧",
    "h": "neu"
   }
  ],
  "woerter": 71
 },
 {
  "n": 4,
  "titel": "Firmenparkplatz gebührenpflichtig",
  "typ": "T2",
  "aufgabe": "Die Mitarbeiter sollen in Zukunft für das Parken auf dem Firmenparkplatz Gebühren zahlen.",
  "aufgabeRu": "В будущем сотрудники должны платить за парковку на парковке фирмы.",
  "kopf": "K",
  "alt": [],
  "wort": "Parkplatz",
  "wortRu": "парковки",
  "thema": {
   "de": "die neuen Kosten in Sachen Parkplatz",
   "ru": "о новых расходах насчёт парковки"
  },
  "exakt": {
   "de": "die neuen Parkgebühren",
   "ru": "новые сборы за парковку"
  },
  "tail": "A",
  "feierabend": false,
  "inhalt": {
   "de": "Kostenlose Parkplätze soll es dann nicht mehr geben.",
   "ru": "Бесплатных мест тогда больше не будет."
  },
  "grund": "belastung",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Kosten in Sachen Parkplatz⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых расходах насчёт парковки⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Kostenlose Parkplätze soll es dann nicht mehr geben.⟧",
    "ru": "⟦Бесплатных мест тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦для сотрудников из-за этого возникает дополнительная финансовая нагрузка⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Gerade Kollegen mit geringerem Einkommen können sich solche zusätzlichen Kosten kaum leisten.⟧",
    "ru": "⟦Именно коллеги с меньшим доходом едва ли могут позволить себе такие дополнительные расходы.⟧",
    "h": "neu"
   }
  ],
  "woerter": 70
 },
 {
  "n": 5,
  "titel": "Rückenfreundliche Bürostühle",
  "typ": "T2",
  "aufgabe": "Für alle Mitarbeiter sollen rückenfreundliche Bürostühle angeschafft werden. Die Hälfte der Kosten sollen sie selbst bezahlen.",
  "aufgabeRu": "Для всех сотрудников закупят стулья, полезные для спины. Половину стоимости они должны оплатить сами.",
  "kopf": "K",
  "alt": [],
  "wort": "Büroausstattung",
  "wortRu": "оснащения офиса",
  "thema": {
   "de": "die neuen Kosten in Sachen Büroausstattung",
   "ru": "о новых расходах насчёт оснащения офиса"
  },
  "exakt": null,
  "tail": "V",
  "feierabend": false,
  "inhalt": {
   "de": "Die Hälfte müssten wir aus eigener Tasche bezahlen.",
   "ru": "Половину нам пришлось бы платить из своего кармана."
  },
  "grund": "belastung",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Kosten in Sachen Büroausstattung⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых расходах насчёт оснащения офиса⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Die Hälfte müssten wir aus eigener Tasche bezahlen.⟧",
    "ru": "⟦Половину нам пришлось бы платить из своего кармана.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦для сотрудников из-за этого возникает дополнительная финансовая нагрузка⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Gerade Kollegen mit geringerem Einkommen können sich solche zusätzlichen Kosten kaum leisten.⟧",
    "ru": "⟦Именно коллеги с меньшим доходом едва ли могут позволить себе такие дополнительные расходы.⟧",
    "h": "neu"
   }
  ],
  "woerter": 70
 },
 {
  "n": 6,
  "titel": "Jobticket oder Firmenfahrrad",
  "typ": "T4",
  "aufgabe": "Ihr Arbeitgeber möchte allen Mitarbeitern entweder ein Firmenfahrrad oder monatlich einen 50-Euro-Zuschuss zum Jobticket geben.",
  "aufgabeRu": "Работодатель хочет дать всем сотрудникам либо служебный велосипед, либо ежемесячную доплату 50 евро к проездному.",
  "kopf": "V",
  "alt": [],
  "wort": "Arbeitsweg",
  "wortRu": "дороги на работу",
  "thema": {
   "de": "die beiden Vorschläge in Sachen Arbeitsweg",
   "ru": "об обоих предложениях насчёт дороги на работу"
  },
  "exakt": null,
  "tail": "D",
  "feierabend": false,
  "inhalt": {
   "de": "Beides zusammen soll es leider nicht geben.",
   "ru": "И то и другое вместе, к сожалению, не дадут."
  },
  "grund": "pro2",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die beiden Vorschläge in Sachen Arbeitsweg⟧ gestritten.",
    "ru": "В команде спорят ⟦об обоих предложениях насчёт дороги на работу⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Beides zusammen soll es leider nicht geben.⟧",
    "ru": "⟦И то и другое вместе, к сожалению, не дадут.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich persönlich würde mich eindeutig für ⟦den Zuschuss zum Jobticket⟧ entscheiden, da diese Variante unser Arbeitsumfeld positiv beeinflusst.",
    "ru": "Я бы однозначно выбрал ⟦доплату к проездному⟧, так как этот вариант положительно влияет на нашу рабочую среду.",
    "h": "wahl"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Vorteil ist, dass ⟦alle Kollegen gleichermaßen davon profitieren können⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенное преимущество в том, что ⟦все коллеги могут в равной мере извлечь из этого пользу⟧.",
    "h": "wahl"
   },
   {
    "id": "5b",
    "de": "Themen wie ⟦Arbeitsweg, Wetter und Gesundheit⟧ spielen dabei eine große Rolle.",
    "ru": "Такие темы, как ⟦дорога на работу, погода и здоровье⟧, играют при этом большую роль.",
    "h": "ok"
   }
  ],
  "woerter": 66
 },
 {
  "n": 7,
  "titel": "Computerkurs außerhalb der Arbeitszeit",
  "typ": "T1",
  "aufgabe": "Alle Mitarbeiter sollen einen verpflichtenden Computerkurs außerhalb der Arbeitszeit besuchen. Die Firma übernimmt die Kosten.",
  "aufgabeRu": "Все сотрудники должны пройти обязательный компьютерный курс вне рабочего времени. Расходы берёт на себя фирма.",
  "kopf": "F",
  "alt": [],
  "wort": "Weiterbildung",
  "wortRu": "обучения",
  "thema": {
   "de": "die neue Pflicht in Sachen Weiterbildung",
   "ru": "о новой обязанности насчёт обучения"
  },
  "exakt": {
   "de": "die neue Pflichtschulung",
   "ru": "новое обязательное обучение"
  },
  "tail": "B",
  "feierabend": true,
  "inhalt": {
   "de": "Die Teilnahme wäre dann für alle Pflicht – und zwar nach Feierabend.",
   "ru": "Участие тогда было бы обязательным для всех — причём после работы."
  },
  "grund": "freizeit",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neue Pflicht in Sachen Weiterbildung⟧ gestritten.",
    "ru": "В команде спорят ⟦о новой обязанности насчёт обучения⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Die Teilnahme wäre dann für alle Pflicht – und zwar nach Feierabend.⟧",
    "ru": "⟦Участие тогда было бы обязательным для всех — причём после работы.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Mitarbeiter dadurch einen Teil ihrer Freizeit opfern müssten⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦сотрудникам пришлось бы пожертвовать частью свободного времени⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Nach einem langen Arbeitstag brauchen wir den Feierabend, um uns zu erholen und Zeit mit der Familie zu verbringen.⟧",
    "ru": "⟦После долгого рабочего дня нам нужен вечер, чтобы отдохнуть и провести время с семьёй.⟧",
    "h": "neu"
   }
  ],
  "woerter": 80
 },
 {
  "n": 8,
  "titel": "Alle duzen",
  "typ": "T6",
  "aufgabe": "Für ein besseres Betriebsklima sollen sich zukünftig alle duzen – auch Vorgesetzte und Kunden.",
  "aufgabeRu": "Для лучшей атмосферы в будущем все должны обращаться друг к другу на «ты» — в том числе к начальству и клиентам.",
  "kopf": "U",
  "alt": [],
  "wort": "Anrede",
  "wortRu": "обращения",
  "thema": {
   "de": "die geplante Umstellung in Sachen Anrede",
   "ru": "о планируемой перестройке насчёт обращения"
  },
  "exakt": {
   "de": "die neue Du-Kultur",
   "ru": "новая культура «на ты»"
  },
  "tail": "A",
  "feierabend": false,
  "inhalt": {
   "de": "Das förmliche „Sie“ soll es dann nicht mehr geben.",
   "ru": "Официального «Вы» тогда больше не будет."
  },
  "grund": "passt",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Umstellung in Sachen Anrede⟧ gestritten.",
    "ru": "В команде спорят ⟦о планируемой перестройке насчёт обращения⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Das förmliche „Sie“ soll es dann nicht mehr geben.⟧",
    "ru": "⟦Официального «Вы» тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Ein gutes Betriebsklima entsteht durch Wertschätzung und nicht durch Vorschriften.⟧",
    "ru": "⟦Хорошая атмосфера на работе возникает из уважения, а не из предписаний.⟧",
    "h": "neu"
   }
  ],
  "woerter": 75
 },
 {
  "n": 9,
  "titel": "Verpflichtende Teamsitzungen ★",
  "typ": "T1",
  "aufgabe": "Alle Mitarbeiter sollen verpflichtet werden, an regelmäßigen Teamsitzungen teilzunehmen, auch wenn diese außerhalb ihrer Arbeitszeit stattfinden.",
  "aufgabeRu": "Всех сотрудников обяжут участвовать в регулярных собраниях команды, даже если они проходят вне рабочего времени.",
  "kopf": "F",
  "alt": [],
  "wort": "Besprechungen",
  "wortRu": "совещаний",
  "thema": {
   "de": "die neue Pflicht in Sachen Besprechungen",
   "ru": "о новой обязанности насчёт совещаний"
  },
  "exakt": {
   "de": "die neue Anwesenheitspflicht",
   "ru": "новая обязанность присутствовать"
  },
  "tail": "B",
  "feierabend": true,
  "inhalt": {
   "de": "Die Teilnahme wäre dann für alle Pflicht – und zwar nach Feierabend.",
   "ru": "Участие тогда было бы обязательным для всех — причём после работы."
  },
  "grund": "freizeit",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neue Pflicht in Sachen Besprechungen⟧ gestritten.",
    "ru": "В команде спорят ⟦о новой обязанности насчёт совещаний⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Die Teilnahme wäre dann für alle Pflicht – und zwar nach Feierabend.⟧",
    "ru": "⟦Участие тогда было бы обязательным для всех — причём после работы.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Mitarbeiter dadurch einen Teil ihrer Freizeit opfern müssten⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦сотрудникам пришлось бы пожертвовать частью свободного времени⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Nach einem langen Arbeitstag brauchen wir den Feierabend, um uns zu erholen und Zeit mit der Familie zu verbringen.⟧",
    "ru": "⟦После долгого рабочего дня нам нужен вечер, чтобы отдохнуть и провести время с семьёй.⟧",
    "h": "neu"
   }
  ],
  "woerter": 80
 },
 {
  "n": 10,
  "titel": "Firmenhandy für alle ★",
  "typ": "T1",
  "aufgabe": "Alle Mitarbeiter sollen ein Firmenhandy bekommen, damit sie immer erreichbar sind – auch am Abend und an den Wochenenden.",
  "aufgabeRu": "Все сотрудники получат служебный телефон, чтобы всегда быть на связи — и вечером, и в выходные.",
  "kopf": "F",
  "alt": [],
  "wort": "Erreichbarkeit",
  "wortRu": "«быть на связи»",
  "thema": {
   "de": "die neue Pflicht in Sachen Erreichbarkeit",
   "ru": "о новой обязанности насчёт «быть на связи»"
  },
  "exakt": {
   "de": "die ständige Erreichbarkeit",
   "ru": "постоянное «быть на связи»"
  },
  "tail": "A",
  "feierabend": false,
  "inhalt": {
   "de": "Wirklich freie Abende soll es dann nicht mehr geben.",
   "ru": "По-настоящему свободных вечеров тогда больше не будет."
  },
  "grund": "freizeit",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neue Pflicht in Sachen Erreichbarkeit⟧ gestritten.",
    "ru": "В команде спорят ⟦о новой обязанности насчёт «быть на связи»⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Wirklich freie Abende soll es dann nicht mehr geben.⟧",
    "ru": "⟦По-настоящему свободных вечеров тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Mitarbeiter dadurch einen Teil ihrer Freizeit opfern müssten⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦сотрудникам пришлось бы пожертвовать частью свободного времени⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Nach einem langen Arbeitstag brauchen wir den Feierabend, um uns zu erholen und Zeit mit der Familie zu verbringen.⟧",
    "ru": "⟦После долгого рабочего дня нам нужен вечер, чтобы отдохнуть и провести время с семьёй.⟧",
    "h": "neu"
   }
  ],
  "woerter": 78
 },
 {
  "n": 11,
  "titel": "Weniger Müll im Betrieb",
  "typ": "T3",
  "aufgabe": "Die Mitarbeiter sollen Verpackungsmüll sparen. Es gibt neue Kühlschränke und Mikrowellen. Alle Snackautomaten sollen entfernt werden.",
  "aufgabeRu": "Сотрудники должны производить меньше упаковочного мусора. Есть новые холодильники и микроволновки. Все автоматы со снеками уберут.",
  "kopf": "E",
  "alt": [],
  "wort": "Snacks",
  "wortRu": "перекусов",
  "thema": {
   "de": "die neuen Einschränkungen in Sachen Snacks",
   "ru": "о новых ограничениях насчёт перекусов"
  },
  "exakt": null,
  "tail": "A",
  "feierabend": false,
  "inhalt": {
   "de": "Snackautomaten soll es dann nicht mehr geben.",
   "ru": "Автоматов со снеками тогда больше не будет."
  },
  "grund": "passt",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Einschränkungen in Sachen Snacks⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых ограничениях насчёт перекусов⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Snackautomaten soll es dann nicht mehr geben.⟧",
    "ru": "⟦Автоматов со снеками тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Umweltschutz ist wichtig, aber er darf nicht allein auf Kosten der Mitarbeiter gehen.⟧",
    "ru": "⟦Защита окружающей среды важна, но она не должна идти только за счёт сотрудников.⟧",
    "h": "neu"
   }
  ],
  "woerter": 76
 },
 {
  "n": 12,
  "titel": "Mehr Lohn oder Urlaubstage",
  "typ": "T4",
  "aufgabe": "Für mehr Zufriedenheit soll es entweder etwas mehr Lohn oder zwei zusätzliche Urlaubstage für alle geben.",
  "aufgabeRu": "Для большей удовлетворённости всем дадут либо немного больше зарплаты, либо два дополнительных дня отпуска.",
  "kopf": "V",
  "alt": [],
  "wort": "Lohn und Urlaub",
  "wortRu": "зарплаты и отпуска",
  "thema": {
   "de": "die beiden Vorschläge in Sachen Lohn und Urlaub",
   "ru": "об обоих предложениях насчёт зарплаты и отпуска"
  },
  "exakt": null,
  "tail": "D",
  "feierabend": false,
  "inhalt": {
   "de": "Beides zusammen soll es leider nicht geben.",
   "ru": "И то и другое вместе, к сожалению, не дадут."
  },
  "grund": "pro1",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die beiden Vorschläge in Sachen Lohn und Urlaub⟧ gestritten.",
    "ru": "В команде спорят ⟦об обоих предложениях насчёт зарплаты и отпуска⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Beides zusammen soll es leider nicht geben.⟧",
    "ru": "⟦И то и другое вместе, к сожалению, не дадут.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich persönlich würde mich eindeutig für ⟦die zusätzlichen Urlaubstage⟧ entscheiden, da diese Variante unser Arbeitsumfeld positiv beeinflusst.",
    "ru": "Я бы однозначно выбрал ⟦дополнительные дни отпуска⟧, так как этот вариант положительно влияет на нашу рабочую среду.",
    "h": "wahl"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Vorteil ist, dass ⟦diese Variante den Bedürfnissen der meisten Kollegen besser entspricht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенное преимущество в том, что ⟦этот вариант лучше отвечает потребностям большинства коллег⟧.",
    "h": "wahl"
   },
   {
    "id": "5b",
    "de": "Themen wie ⟦Erholung, Familie und Einkommen⟧ spielen dabei eine große Rolle.",
    "ru": "Такие темы, как ⟦отдых, семья и доход⟧, играют при этом большую роль.",
    "h": "ok"
   }
  ],
  "woerter": 70
 },
 {
  "n": 13,
  "titel": "Ein großer Drucker pro Etage",
  "typ": "T6",
  "aufgabe": "Alle Drucker in den Büros sollen abgeschafft werden, stattdessen soll es pro Etage einen großen Drucker auf dem Flur geben.",
  "aufgabeRu": "Все принтеры в кабинетах уберут, вместо этого на каждом этаже в коридоре будет один большой принтер.",
  "kopf": "U",
  "alt": [],
  "wort": "Drucker",
  "wortRu": "принтеров",
  "thema": {
   "de": "die geplante Umstellung in Sachen Drucker",
   "ru": "о планируемой перестройке насчёт принтеров"
  },
  "exakt": null,
  "tail": "A",
  "feierabend": false,
  "inhalt": {
   "de": "Eigene Drucker im Büro soll es dann nicht mehr geben.",
   "ru": "Своих принтеров в кабинете тогда больше не будет."
  },
  "grund": "passt",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Umstellung in Sachen Drucker⟧ gestritten.",
    "ru": "В команде спорят ⟦о планируемой перестройке насчёт принтеров⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Eigene Drucker im Büro soll es dann nicht mehr geben.⟧",
    "ru": "⟦Своих принтеров в кабинете тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Bei ständiger Ablenkung und einem hohen Lärmpegel kann niemand konzentriert arbeiten.⟧",
    "ru": "⟦При постоянном отвлечении и высоком уровне шума никто не может работать сосредоточенно.⟧",
    "h": "neu"
   }
  ],
  "woerter": 77
 },
 {
  "n": 14,
  "titel": "Freizeitausgleich statt Bezahlung",
  "typ": "T3",
  "aufgabe": "Überstunden können ab sofort nur noch als Freizeit ausgeglichen werden. Die Auszahlung ist nicht mehr erlaubt.",
  "aufgabeRu": "Сверхурочные с этого момента можно компенсировать только отгулами. Выплата больше не разрешена.",
  "kopf": "E",
  "alt": [],
  "wort": "Überstunden",
  "wortRu": "сверхурочных",
  "thema": {
   "de": "die neuen Einschränkungen in Sachen Überstunden",
   "ru": "о новых ограничениях насчёт сверхурочных"
  },
  "exakt": {
   "de": "die neue Überstundenregelung",
   "ru": "новое правило о сверхурочных"
  },
  "tail": "A",
  "feierabend": false,
  "inhalt": {
   "de": "Geld für Überstunden soll es dann nicht mehr geben.",
   "ru": "Денег за сверхурочные тогда больше не будет."
  },
  "grund": "passt",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Einschränkungen in Sachen Überstunden⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых ограничениях насчёт сверхурочных⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Geld für Überstunden soll es dann nicht mehr geben.⟧",
    "ru": "⟦Денег за сверхурочные тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "Themen wie ⟦Einkommen, Familie und Erholung⟧ spielen dabei eine große Rolle.",
    "ru": "Такие темы, как ⟦доход, семья и отдых⟧, играют при этом большую роль.",
    "h": "ok"
   }
  ],
  "woerter": 76
 },
 {
  "n": 15,
  "titel": "Energie sparen",
  "typ": "T3",
  "aufgabe": "Es soll nicht mehr so viel geheizt werden. Wenn es kalt ist, können die Mitarbeiter in Winterkleidung arbeiten.",
  "aufgabeRu": "Будут меньше топить. Если холодно, сотрудники могут работать в зимней одежде.",
  "kopf": "E",
  "alt": [],
  "wort": "Heizung",
  "wortRu": "отопления",
  "thema": {
   "de": "die neuen Einschränkungen in Sachen Heizung",
   "ru": "о новых ограничениях насчёт отопления"
  },
  "exakt": {
   "de": "die geplanten Energiesparmaßnahmen",
   "ru": "планируемые меры экономии энергии"
  },
  "tail": "A",
  "feierabend": false,
  "inhalt": {
   "de": "Warme Büros soll es dann nicht mehr geben.",
   "ru": "Тёплых кабинетов тогда больше не будет."
  },
  "grund": "passt",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Einschränkungen in Sachen Heizung⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых ограничениях насчёт отопления⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Warme Büros soll es dann nicht mehr geben.⟧",
    "ru": "⟦Тёплых кабинетов тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Umweltschutz ist wichtig, aber er darf nicht allein auf Kosten der Mitarbeiter gehen.⟧",
    "ru": "⟦Защита окружающей среды важна, но она не должна идти только за счёт сотрудников.⟧",
    "h": "neu"
   }
  ],
  "woerter": 77
 },
 {
  "n": 16,
  "titel": "Vegetarische Küche",
  "typ": "T3",
  "aufgabe": "In der Betriebskantine soll nur noch vegetarisches Essen angeboten werden. Wer Fleisch essen möchte, muss es von zu Hause mitbringen.",
  "aufgabeRu": "В столовой будут предлагать только вегетарианскую еду. Кто хочет мяса — приносит еду из дома.",
  "kopf": "E",
  "alt": [],
  "wort": "Kantinenessen",
  "wortRu": "еды в столовой",
  "thema": {
   "de": "die neuen Einschränkungen in Sachen Kantinenessen",
   "ru": "о новых ограничениях насчёт еды в столовой"
  },
  "exakt": {
   "de": "die fleischlose Kantine",
   "ru": "столовая без мяса"
  },
  "tail": "A",
  "feierabend": false,
  "inhalt": {
   "de": "Fleischgerichte soll es dann nicht mehr geben.",
   "ru": "Мясных блюд тогда больше не будет."
  },
  "grund": "passt",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Einschränkungen in Sachen Kantinenessen⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых ограничениях насчёт еды в столовой⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Fleischgerichte soll es dann nicht mehr geben.⟧",
    "ru": "⟦Мясных блюд тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Jeder hat andere Essgewohnheiten, und die Pause dient schließlich der Erholung.⟧",
    "ru": "⟦У каждого свои пищевые привычки, а перерыв в конце концов служит отдыху.⟧",
    "h": "neu"
   }
  ],
  "woerter": 74
 },
 {
  "n": 17,
  "titel": "Gemeinsames Mittagessen",
  "typ": "T2",
  "aufgabe": "Jeden Freitag soll das Mittagessen von einem Cateringservice geliefert werden. Die Kosten sollen die Angestellten tragen.",
  "aufgabeRu": "Каждую пятницу обед будет доставлять кейтеринговая служба. Расходы несут сотрудники.",
  "kopf": "K",
  "alt": [],
  "wort": "Mittagessen",
  "wortRu": "обеда",
  "thema": {
   "de": "die neuen Kosten in Sachen Mittagessen",
   "ru": "о новых расходах насчёт обеда"
  },
  "exakt": null,
  "tail": "V",
  "feierabend": false,
  "inhalt": {
   "de": "Das Essen müssten wir aus eigener Tasche bezahlen.",
   "ru": "Еду нам пришлось бы платить из своего кармана."
  },
  "grund": "belastung",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Kosten in Sachen Mittagessen⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых расходах насчёт обеда⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Das Essen müssten wir aus eigener Tasche bezahlen.⟧",
    "ru": "⟦Еду нам пришлось бы платить из своего кармана.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦для сотрудников из-за этого возникает дополнительная финансовая нагрузка⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Gerade Kollegen mit geringerem Einkommen können sich solche zusätzlichen Kosten kaum leisten.⟧",
    "ru": "⟦Именно коллеги с меньшим доходом едва ли могут позволить себе такие дополнительные расходы.⟧",
    "h": "neu"
   }
  ],
  "woerter": 70
 },
 {
  "n": 18,
  "titel": "Obst statt Süßigkeiten",
  "typ": "T3",
  "aufgabe": "Im Pausenraum soll es keine Süßigkeiten mehr geben. Stattdessen gibt es frisches Obst.",
  "aufgabeRu": "В комнате отдыха больше не будет сладостей. Вместо них — свежие фрукты.",
  "kopf": "U",
  "alt": [],
  "wort": "Pausensnacks",
  "wortRu": "перекусов в перерыв",
  "thema": {
   "de": "die geplante Umstellung in Sachen Pausensnacks",
   "ru": "о планируемой перестройке насчёт перекусов в перерыв"
  },
  "exakt": null,
  "tail": "A",
  "feierabend": false,
  "inhalt": {
   "de": "Schokolade und Kekse soll es dann nicht mehr geben.",
   "ru": "Шоколада и печенья тогда больше не будет."
  },
  "grund": "passt",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Umstellung in Sachen Pausensnacks⟧ gestritten.",
    "ru": "В команде спорят ⟦о планируемой перестройке насчёт перекусов в перерыв⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Schokolade und Kekse soll es dann nicht mehr geben.⟧",
    "ru": "⟦Шоколада и печенья тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Jeder hat andere Essgewohnheiten, und die Pause dient schließlich der Erholung.⟧",
    "ru": "⟦У каждого свои пищевые привычки, а перерыв в конце концов служит отдыху.⟧",
    "h": "neu"
   }
  ],
  "woerter": 76
 },
 {
  "n": 19,
  "titel": "Betriebskindergarten",
  "typ": "T5",
  "aufgabe": "Ab September soll ein Betriebskindergarten mit 25 Plätzen eingeführt werden.",
  "aufgabeRu": "С сентября откроют корпоративный детский сад на 25 мест.",
  "kopf": "A",
  "alt": [],
  "wort": "Kinderbetreuung",
  "wortRu": "присмотра за детьми",
  "thema": {
   "de": "das neue Angebot in Sachen Kinderbetreuung",
   "ru": "о новом предложении насчёт присмотра за детьми"
  },
  "exakt": {
   "de": "die geplante Betriebskita",
   "ru": "планируемый детсад фирмы"
  },
  "tail": "G",
  "feierabend": false,
  "inhalt": {
   "de": "Geplant ist eine eigene Kita.",
   "ru": "Планируется свой детсад."
  },
  "grund": "kosten",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦das neue Angebot in Sachen Kinderbetreuung⟧ gestritten.",
    "ru": "В команде спорят ⟦о новом предложении насчёт присмотра за детьми⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Geplant ist eine eigene Kita.⟧",
    "ru": "⟦Планируется свой детсад.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Umsetzung große finanzielle Mittel und einen hohen organisatorischen Aufwand erfordert⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦реализация требует больших финансовых средств и высоких организационных затрат⟧.",
    "h": "orig"
   },
   {
    "id": "5b",
    "de": "Themen wie ⟦Budget, Fairness und Prioritäten⟧ spielen dabei eine große Rolle.",
    "ru": "Такие темы, как ⟦бюджет, справедливость и приоритеты⟧, играют при этом большую роль.",
    "h": "ok"
   }
  ],
  "woerter": 68
 },
 {
  "n": 20,
  "titel": "Geburtstag des Geschäftsführers",
  "typ": "T2",
  "aufgabe": "Für den Geburtstag des Geschäftsführers soll eine große Party organisiert werden. Jeder soll 50 Euro beitragen.",
  "aufgabeRu": "На день рождения директора устроят большую вечеринку. Каждый должен внести 50 евро.",
  "kopf": "P",
  "alt": [
   "K"
  ],
  "wort": "Geburtstagsfeier",
  "wortRu": "празднования дня рождения",
  "thema": {
   "de": "die neuen Pläne in Sachen Geburtstagsfeier",
   "ru": "о новых планах насчёт празднования дня рождения"
  },
  "exakt": null,
  "tail": "V",
  "feierabend": false,
  "inhalt": {
   "de": "Die Feier müssten wir aus eigener Tasche bezahlen.",
   "ru": "Праздник нам пришлось бы платить из своего кармана."
  },
  "grund": "belastung",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Pläne in Sachen Geburtstagsfeier⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых планах насчёт празднования дня рождения⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Die Feier müssten wir aus eigener Tasche bezahlen.⟧",
    "ru": "⟦Праздник нам пришлось бы платить из своего кармана.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦для сотрудников из-за этого возникает дополнительная финансовая нагрузка⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "Themen wie ⟦Freiwilligkeit, Budget und Gleichbehandlung⟧ spielen dabei eine große Rolle.",
    "ru": "Такие темы, как ⟦добровольность, бюджет и равное отношение⟧, играют при этом большую роль.",
    "h": "ok"
   }
  ],
  "woerter": 69
 },
 {
  "n": 21,
  "titel": "Bonus ohne Krankheitstage",
  "typ": "T5",
  "aufgabe": "Mitarbeiter, die im ganzen Jahr an keinem Tag krankheitsbedingt gefehlt haben, sollen einen Bonus bekommen.",
  "aufgabeRu": "Сотрудники, которые за весь год ни дня не пропустили по болезни, получат премию.",
  "kopf": "P",
  "alt": [
   "A"
  ],
  "wort": "Bonus",
  "wortRu": "премии",
  "thema": {
   "de": "die neuen Pläne in Sachen Bonus",
   "ru": "о новых планах насчёт премии"
  },
  "exakt": {
   "de": "die neue Gesundheitsprämie",
   "ru": "новая премия за здоровье"
  },
  "tail": "G",
  "feierabend": false,
  "inhalt": {
   "de": "Geplant ist eine Prämie für gesunde Mitarbeiter.",
   "ru": "Планируется премия для здоровых сотрудников."
  },
  "grund": "druck",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Pläne in Sachen Bonus⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых планах насчёт премии⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Geplant ist eine Prämie für gesunde Mitarbeiter.⟧",
    "ru": "⟦Планируется премия для здоровых сотрудников.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch ein erheblicher Druck auf die Mitarbeiter entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦из-за этого на сотрудников ложится сильное давление⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Strenge Kontrollen zerstören das Vertrauen und die Eigenverantwortung der Mitarbeiter.⟧",
    "ru": "⟦Строгий контроль разрушает доверие и самостоятельность сотрудников.⟧",
    "h": "neu"
   }
  ],
  "woerter": 66
 },
 {
  "n": 22,
  "titel": "Kürzere Mittagspause",
  "typ": "T3",
  "aufgabe": "Die Mittagspause soll statt einer Stunde nur noch 30 Minuten betragen. Dafür haben die Mitarbeiter früher Feierabend.",
  "aufgabeRu": "Обеденный перерыв будет длиться не час, а только 30 минут. Зато сотрудники раньше уходят домой.",
  "kopf": "E",
  "alt": [],
  "wort": "Mittagspause",
  "wortRu": "обеденного перерыва",
  "thema": {
   "de": "die neuen Einschränkungen in Sachen Mittagspause",
   "ru": "о новых ограничениях насчёт обеденного перерыва"
  },
  "exakt": {
   "de": "die verkürzte Mittagspause",
   "ru": "сокращённый обеденный перерыв"
  },
  "tail": "A",
  "feierabend": false,
  "inhalt": {
   "de": "Lange Mittagspausen soll es dann nicht mehr geben.",
   "ru": "Длинных обеденных перерывов тогда больше не будет."
  },
  "grund": "passt",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Einschränkungen in Sachen Mittagspause⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых ограничениях насчёт обеденного перерыва⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Lange Mittagspausen soll es dann nicht mehr geben.⟧",
    "ru": "⟦Длинных обеденных перерывов тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Jeder hat andere Essgewohnheiten, und die Pause dient schließlich der Erholung.⟧",
    "ru": "⟦У каждого свои пищевые привычки, а перерыв в конце концов служит отдыху.⟧",
    "h": "neu"
   }
  ],
  "woerter": 75
 },
 {
  "n": 23,
  "titel": "Meetings online",
  "typ": "T6",
  "aufgabe": "Um Zeit und Kosten zu sparen, sollen Meetings nur noch online stattfinden.",
  "aufgabeRu": "Чтобы сэкономить время и деньги, совещания будут проходить только онлайн.",
  "kopf": "U",
  "alt": [],
  "wort": "Besprechungen",
  "wortRu": "совещаний",
  "thema": {
   "de": "die geplante Umstellung in Sachen Besprechungen",
   "ru": "о планируемой перестройке насчёт совещаний"
  },
  "exakt": {
   "de": "die geplanten Online-Besprechungen",
   "ru": "планируемые онлайн-совещания"
  },
  "tail": "A",
  "feierabend": false,
  "inhalt": {
   "de": "Persönliche Treffen soll es dann nicht mehr geben.",
   "ru": "Личных встреч тогда больше не будет."
  },
  "grund": "passt",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Umstellung in Sachen Besprechungen⟧ gestritten.",
    "ru": "В команде спорят ⟦о планируемой перестройке насчёт совещаний⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Persönliche Treffen soll es dann nicht mehr geben.⟧",
    "ru": "⟦Личных встреч тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "Themen wie ⟦Teamgeist, Vertrauen und Kommunikation⟧ spielen dabei eine große Rolle.",
    "ru": "Такие темы, как ⟦командный дух, доверие и общение⟧, играют при этом большую роль.",
    "h": "ok"
   }
  ],
  "woerter": 75
 },
 {
  "n": 24,
  "titel": "Mehr Praktikanten",
  "typ": "T6",
  "aufgabe": "Da es viel zu tun gibt, sollen in Zukunft mehr Praktikanten eingestellt werden.",
  "aufgabeRu": "Так как работы много, в будущем будут нанимать больше стажёров.",
  "kopf": "P",
  "alt": [
   "U"
  ],
  "wort": "Personal",
  "wortRu": "персонала",
  "thema": {
   "de": "die neuen Pläne in Sachen Personal",
   "ru": "о новых планах насчёт персонала"
  },
  "exakt": null,
  "tail": "G",
  "feierabend": false,
  "inhalt": {
   "de": "Geplant sind zusätzliche Praktikumsstellen.",
   "ru": "Планируются дополнительные места для стажёров."
  },
  "grund": "mehraufwand",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Pläne in Sachen Personal⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых планах насчёт персонала⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Geplant sind zusätzliche Praktikumsstellen.⟧",
    "ru": "⟦Планируются дополнительные места для стажёров.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch ein erheblicher Mehraufwand für die Kollegen entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦из-за этого у коллег появляется много дополнительной работы⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Auf Dauer würden darunter unser Wohlbefinden und unsere Leistungsfähigkeit leiden.⟧",
    "ru": "⟦Со временем от этого пострадали бы наше самочувствие и работоспособность.⟧",
    "h": "neu"
   }
  ],
  "woerter": 63
 },
 {
  "n": 25,
  "titel": "Klassische Musik",
  "typ": "T6",
  "aufgabe": "In allen Büros soll während der Arbeit klassische Musik gespielt werden, damit sich die Mitarbeiter wohler fühlen.",
  "aufgabeRu": "Во всех офисах во время работы будет играть классическая музыка, чтобы сотрудники чувствовали себя комфортнее.",
  "kopf": "P",
  "alt": [
   "U"
  ],
  "wort": "Musik am Arbeitsplatz",
  "wortRu": "музыки на рабочем месте",
  "thema": {
   "de": "die neuen Pläne in Sachen Musik am Arbeitsplatz",
   "ru": "о новых планах насчёт музыки на рабочем месте"
  },
  "exakt": null,
  "tail": "A",
  "feierabend": false,
  "inhalt": {
   "de": "Ruhige Büros soll es dann nicht mehr geben.",
   "ru": "Тихих кабинетов тогда больше не будет."
  },
  "grund": "passt",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Pläne in Sachen Musik am Arbeitsplatz⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых планах насчёт музыки на рабочем месте⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Ruhige Büros soll es dann nicht mehr geben.⟧",
    "ru": "⟦Тихих кабинетов тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Bei ständiger Ablenkung und einem hohen Lärmpegel kann niemand konzentriert arbeiten.⟧",
    "ru": "⟦При постоянном отвлечении и высоком уровне шума никто не может работать сосредоточенно.⟧",
    "h": "neu"
   }
  ],
  "woerter": 77
 },
 {
  "n": 26,
  "titel": "Bürogestaltung: Großraumbüro ★",
  "typ": "T6",
  "aufgabe": "In Ihrer Firma soll im Großraumbüro gearbeitet werden. Die Geschäftsführung meint, offene Räume sind gut für das Arbeitsklima.",
  "aufgabeRu": "В вашей фирме будут работать в опен-спейсе. Руководство считает, что открытые пространства хороши для атмосферы.",
  "kopf": "U",
  "alt": [],
  "wort": "Büroräume",
  "wortRu": "офисных помещений",
  "thema": {
   "de": "die geplante Umstellung in Sachen Büroräume",
   "ru": "о планируемой перестройке насчёт офисных помещений"
  },
  "exakt": {
   "de": "das geplante Großraumbüro",
   "ru": "планируемый опен-спейс"
  },
  "tail": "A",
  "feierabend": false,
  "inhalt": {
   "de": "Einzelbüros soll es dann nicht mehr geben.",
   "ru": "Отдельных кабинетов тогда больше не будет."
  },
  "grund": "passt",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Umstellung in Sachen Büroräume⟧ gestritten.",
    "ru": "В команде спорят ⟦о планируемой перестройке насчёт офисных помещений⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Einzelbüros soll es dann nicht mehr geben.⟧",
    "ru": "⟦Отдельных кабинетов тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Bei ständiger Ablenkung und einem hohen Lärmpegel kann niemand konzentriert arbeiten.⟧",
    "ru": "⟦При постоянном отвлечении и высоком уровне шума никто не может работать сосредоточенно.⟧",
    "h": "neu"
   }
  ],
  "woerter": 74
 },
 {
  "n": 27,
  "titel": "Mitarbeit im Firmengarten",
  "typ": "T1",
  "aufgabe": "Die Mitarbeiter sollen in ihrer Freizeit beim Anlegen und Pflegen eines Firmengartens mithelfen.",
  "aufgabeRu": "Сотрудники должны в свободное время помогать обустраивать корпоративный сад и ухаживать за ним.",
  "kopf": "F",
  "alt": [],
  "wort": "Firmengarten",
  "wortRu": "сада фирмы",
  "thema": {
   "de": "die neue Pflicht in Sachen Firmengarten",
   "ru": "о новой обязанности насчёт сада фирмы"
  },
  "exakt": null,
  "tail": "B",
  "feierabend": true,
  "inhalt": {
   "de": "Die Teilnahme wäre dann für alle Pflicht – und zwar nach Feierabend.",
   "ru": "Участие тогда было бы обязательным для всех — причём после работы."
  },
  "grund": "freizeit",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neue Pflicht in Sachen Firmengarten⟧ gestritten.",
    "ru": "В команде спорят ⟦о новой обязанности насчёт сада фирмы⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Die Teilnahme wäre dann für alle Pflicht – und zwar nach Feierabend.⟧",
    "ru": "⟦Участие тогда было бы обязательным для всех — причём после работы.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Mitarbeiter dadurch einen Teil ihrer Freizeit opfern müssten⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦сотрудникам пришлось бы пожертвовать частью свободного времени⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Nach einem langen Arbeitstag brauchen wir den Feierabend, um uns zu erholen und Zeit mit der Familie zu verbringen.⟧",
    "ru": "⟦После долгого рабочего дня нам нужен вечер, чтобы отдохнуть и провести время с семьёй.⟧",
    "h": "neu"
   }
  ],
  "woerter": 80
 },
 {
  "n": 28,
  "titel": "Verstöße gegen die Sicherheitsvorschriften",
  "typ": "T3",
  "aufgabe": "Es gab in letzter Zeit immer wieder Verstöße gegen die Sicherheitsvorschriften. Sie sollen in Zukunft streng bestraft werden.",
  "aufgabeRu": "В последнее время постоянно нарушают правила техники безопасности. В будущем за это будут строго наказывать.",
  "kopf": "P",
  "alt": [],
  "wort": "Arbeitssicherheit",
  "wortRu": "охраны труда",
  "thema": {
   "de": "die neuen Pläne in Sachen Arbeitssicherheit",
   "ru": "о новых планах насчёт охраны труда"
  },
  "exakt": null,
  "tail": "A",
  "feierabend": false,
  "inhalt": {
   "de": "Ausnahmen soll es dann nicht mehr geben.",
   "ru": "Исключений тогда больше не будет."
  },
  "grund": "druck",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Pläne in Sachen Arbeitssicherheit⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых планах насчёт охраны труда⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Ausnahmen soll es dann nicht mehr geben.⟧",
    "ru": "⟦Исключений тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch ein erheblicher Druck auf die Mitarbeiter entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦из-за этого на сотрудников ложится сильное давление⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Strenge Kontrollen zerstören das Vertrauen und die Eigenverantwortung der Mitarbeiter.⟧",
    "ru": "⟦Строгий контроль разрушает доверие и самостоятельность сотрудников.⟧",
    "h": "neu"
   }
  ],
  "woerter": 66
 },
 {
  "n": 29,
  "titel": "Betriebliche Kinderbetreuung ★",
  "typ": "T2",
  "aufgabe": "Die Mitarbeiter sollen ab dem nächsten Jahr kein Urlaubsgeld mehr bekommen, um die Einrichtung einer betriebseigenen Kita zu finanzieren.",
  "aufgabeRu": "Со следующего года сотрудники больше не будут получать отпускные, чтобы профинансировать собственный детсад фирмы.",
  "kopf": "E",
  "alt": [],
  "wort": "Urlaubsgeld",
  "wortRu": "отпускных",
  "thema": {
   "de": "die neuen Einschränkungen in Sachen Urlaubsgeld",
   "ru": "о новых ограничениях насчёт отпускных"
  },
  "exakt": null,
  "tail": "A",
  "feierabend": false,
  "inhalt": {
   "de": "Extra-Geld für den Urlaub soll es dann nicht mehr geben.",
   "ru": "Дополнительных денег к отпуску тогда больше не будет."
  },
  "grund": "belastung",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Einschränkungen in Sachen Urlaubsgeld⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых ограничениях насчёт отпускных⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Extra-Geld für den Urlaub soll es dann nicht mehr geben.⟧",
    "ru": "⟦Дополнительных денег к отпуску тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦для сотрудников из-за этого возникает дополнительная финансовая нагрузка⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Gerade Kollegen mit geringerem Einkommen können sich solche zusätzlichen Kosten kaum leisten.⟧",
    "ru": "⟦Именно коллеги с меньшим доходом едва ли могут позволить себе такие дополнительные расходы.⟧",
    "h": "neu"
   }
  ],
  "woerter": 72
 },
 {
  "n": 30,
  "titel": "Zigarettenpausen ★",
  "typ": "T3",
  "aufgabe": "Die Mitarbeiter dürfen ab sofort nur noch während der geregelten Pausenzeiten rauchen. Zusätzliche Zigarettenpausen sind nicht mehr erlaubt.",
  "aufgabeRu": "С этого момента курить можно только в официальные перерывы. Дополнительные перекуры больше не разрешены.",
  "kopf": "E",
  "alt": [],
  "wort": "Raucherpausen",
  "wortRu": "перекуров",
  "thema": {
   "de": "die neuen Einschränkungen in Sachen Raucherpausen",
   "ru": "о новых ограничениях насчёт перекуров"
  },
  "exakt": null,
  "tail": "A",
  "feierabend": false,
  "inhalt": {
   "de": "Kurze Raucherpausen zwischendurch soll es dann nicht mehr geben.",
   "ru": "Коротких перекуров между делом тогда больше не будет."
  },
  "grund": "passt",
  "opening": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Einschränkungen in Sachen Raucherpausen⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых ограничениях насчёт перекуров⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Kurze Raucherpausen zwischendurch soll es dann nicht mehr geben.⟧",
    "ru": "⟦Коротких перекуров между делом тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Strenge Kontrollen zerstören das Vertrauen und die Eigenverantwortung der Mitarbeiter.⟧",
    "ru": "⟦Строгий контроль разрушает доверие и самостоятельность сотрудников.⟧",
    "h": "neu"
   }
  ],
  "woerter": 75
 }
];
