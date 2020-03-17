const kernprocess = {
	clusters: [
		{
			naam: 'B&O',
			directies: [
				{
					naam: 'BBGS',
					kernprocessen: [{ naam: 'Besluitvorming B&W', crucial: false }],
				},
				{
					naam: 'DJZ',
					kernprocessen: [
						{
							naam:
								'[Proces]vertegenwoordiging in civiele en bestuursrechtelijke procedures, die niet stil komen te liggen.',
							crucial: false,
						},
						{
							naam: 'Advisering BM Openbare Orde en Veiligheid',
							crucial: true,
						},
						{
							naam:
								'Rechtspositionele advisering 1  ivm Corona bestrijding, 2) bij actute rechtspositionele kwesties [bijv. ontslag op staande voet]',
							crucial: false,
						},
						{
							naam:
								'Advisering in lopende dossiers, die niet stil komen te liggen ivm effecten Corona  (bijv voortgang in AEB of HAGA) ',
							crucial: false,
						},
						{
							naam: 'Juridisch control, Finaal Advies ',
							crucial: false,
						},
					],
				},
				{
					naam: 'DMC',
					kernprocessen: [
						{
							naam: 'Cashmanagement',
							crucial: false,
						},
						{
							naam: 'Treasury betalingen',
							crucial: false,
						},
						{
							naam: 'Verstrekte leningen',
							crucial: false,
						},
						{
							naam: 'Aandeelhoudersbesluiten',
							crucial: false,
						},
					],
				},
				{
					naam: 'Griffie',
					kernprocessen: [
						{
							naam: 'Raads- en commissievergaderingen',
							crucial: false,
						},
						{
							naam: 'Doorgeleiden raadsinstrumenten',
							crucial: false,
						},
						{
							naam: 'Raads- en commissievergaderingen',
							crucial: false,
						},
					],
				},
				{
					naam: 'OOV',
					kernprocessen: [
						{
							naam: 'Crisis- en incidentmanagement',
							crucial: false,
						},
						{
							naam: 'Inzet bestuurlijk instrumentarium burgemeester. ',
							crucial: false,
						},
					],
				},
			],
		},
		{
			naam: 'Dienstverlening',
			directies: [
				{
					naam: 'Basisinformatie',
					kernprocessen: [
						{
							naam: 'Registratie van de BAG',
							crucial: false,
						},
						{
							naam: 'Registratie van de WKPB',
							crucial: false,
						},
						{
							naam: 'Naamgeving openbare Ruimte',
							crucial: false,
						},
						{
							naam: 'Meldingen (TMP en Onderzoek)oppakken',
							crucial: false,
						},
						{
							naam: 'Afhandelen onderzoek binnen gestelde termijnen ',
							crucial: false,
						},
						{
							naam: 'Aansturen ontwikkelen GOB/Diva (3 ontwikkelaars)(',
							crucial: false,
						},
						{
							naam: 'Bevorderen van gebruik',
							crucial: false,
						},
						{
							naam: 'Registratie BRP en BS',
							crucial: false,
						},
						{
							naam: 'Bezwaar en beroep',
							crucial: false,
						},
						{
							naam: 'Correctieverzoeken',
							crucial: false,
						},
						{
							naam: 'Opleiden en toetsen DVL-personeel',
							crucial: false,
						},
					],
				},
				{
					naam: 'Belasting',
					kernprocessen: [
						{
							naam: 'Beheer van gevonden voorwerpen',
							crucial: false,
						},
						{
							naam: 'Belenen',
							crucial: false,
						},
						{
							naam: 'Herbelenen bij loket',
							crucial: false,
						},
						{
							naam: 'Lossen',
							crucial: false,
						},
						{
							naam: 'Dwanginvordering',
							crucial: false,
						},
						{
							naam: 'Bezwaar',
							crucial: false,
						},
						{
							naam: 'Beroep',
							crucial: false,
						},
					],
				},
				{
					naam: 'CTO',
					kernprocessen: [
						{
							naam:
								'Binnen CTO voeren we geen wettelijke gemeentelijke taak uit of een taak met heel groot afbreukrisico',
							crucial: false,
						},
						{
							naam:
								'Voor niet-cruciale processen waar we samenwerken met partners en bewoners',
							crucial: false,
						},
						{
							naam:
								'Financiële administratie, budgetbeheer, directiefuncties. Dit is de bedrijfsvoering, leveren P&C cyclus, etc.',
							crucial: false,
						},
					],
				},
				{
					naam: 'Dienstverlening',
					kernprocessen: [
						{
							naam: 'Geboorteaangifte',
							crucial: true,
						},
						{
							naam: 'Huwelijk, partnerschap en spoedhuwelijk, al gepland',
							crucial: true,
						},
						{
							naam: 'Overlijden',
							crucial: true,
						},
						{
							naam: 'Verhuizingen (loket + online)',
							crucial: true,
						},
						{
							naam: 'Paspoort',
							crucial: true,
						},
						{
							naam: 'ID-kaart',
							crucial: true,
						},
						{
							naam: 'Rijbewijs (Loket + online)',
							crucial: true,
						},
						{
							naam: 'CCA - 14020',
							crucial: true,
						},
						{
							naam: 'CCA - GGD ',
							crucial: true,
						},
						{
							naam: 'CCA - Belastingen ',
							crucial: true,
						},
						{
							naam: 'CCA - Financien',
							crucial: true,
						},
						{
							naam: 'CCA - Parkeren en Verkeer',
							crucial: true,
						},
						{
							naam: 'CCA - Wonen ',
							crucial: true,
						},
						{
							naam: 'CCA - WPI ',
							crucial: true,
						},
						{
							naam: 'CCA - Zorg en Woonoverlast',
							crucial: true,
						},
						{
							naam: 'CCA - Fietsdepot',
							crucial: false,
						},
						{
							naam: 'CCA - Webcare ',
							crucial: false,
						},
						{
							naam: 'CCA - E-mail',
							crucial: false,
						},
						{
							naam: 'CCA - Erfpacht',
							crucial: false,
						},
						{
							naam: 'Verstrekken Uittreksels (loket + online)',
							crucial: false,
						},
						{
							naam: 'Verstrekken Akten (loket + online)',
							crucial: false,
						},
						{
							naam: 'Eigen Verklaring',
							crucial: false,
						},
						{
							naam: 'Verstrekken Briefadres',
							crucial: false,
						},
						{
							naam: 'VOG',
							crucial: false,
						},
						{
							naam: 'Afhalen/innemen brondocumenten',
							crucial: false,
						},
						{
							naam: 'Afschriften akten en uittreksels BRP',
							crucial: false,
						},
						{
							naam: 'Echtscheiding',
							crucial: false,
						},
						{
							naam: 'Eerste inschrijving',
							crucial: false,
						},
						{
							naam: 'Erkenning',
							crucial: false,
						},
						{
							naam: 'Herinschrijving',
							crucial: false,
						},
						{
							naam: 'Nederlander worden',
							crucial: false,
						},
						{
							naam: 'Register Niet Ingezetene (RNI)',
							crucial: false,
						},
						{
							naam: 'SL: Kentekenwijziging ',
							crucial: false,
						},
						{
							naam: 'SL: Vergunningen',
							crucial: false,
						},
						{
							naam: 'SL: Parkeervergunningen',
							crucial: false,
						},
						{
							naam: 'SL: Erfpacht',
							crucial: false,
						},
						{
							naam: 'SL: Sociaal Loket',
							crucial: false,
						},
						{
							naam: 'SL: WPI',
							crucial: false,
						},
						{
							naam: 'SL: Belastingen',
							crucial: false,
						},
						{
							naam: 'Het betalen van facturen voor geleverde diensten ',
							crucial: false,
						},
						{
							naam: 'OS: WFM DVL',
							crucial: false,
						},
						{
							naam: 'OS: 1e lijnssupport',
							crucial: false,
						},
						{
							naam: 'OS: CR DVL',
							crucial: false,
						},
						{
							naam: 'OS: Klachtencoördinatie',
							crucial: false,
						},
						{
							naam: 'OS: Reporting',
							crucial: false,
						},
						{
							naam: 'OS: Werkinstructies',
							crucial: false,
						},
						{
							naam: 'ASC ',
							crucial: false,
						},
						{
							naam: 'O&O',
							crucial: false,
						},
						{
							naam: 'P&O flex',
							crucial: false,
						},
						{
							naam: 'Redactie',
							crucial: false,
						},
						{
							naam: 'Algemene informatie verstrekken over Belastingen',
							crucial: false,
						},
						{
							naam: 'Subsidies',
							crucial: false,
						},
						{
							naam: 'Stadsbank van Lening',
							crucial: false,
						},
						{
							naam: 'Financiën    Het versturen van facturen ',
							crucial: false,
						},
						{
							naam: ' Parkeerautomaten',
							crucial: false,
						},
						{
							naam:
								'alle parkeervergunningen, vragen over beleid, tarieven straatparkeren',
							crucial: false,
						},
						{
							naam: 'parkeerbon',
							crucial: false,
						},
						{
							naam: 'Fietsdepot',
							crucial: false,
						},
						{
							naam: 'fiets ophalen',
							crucial: false,
						},
						{
							naam: 'CCA: Erfpachtvragen canon of juridisch',
							crucial: false,
						},
						{
							naam: 'Onderzoek & Ontwikkeling',
							crucial: false,
						},
						{
							naam: 'P&O flex',
							crucial: false,
						},
						{
							naam: 'Klachtencoördinatie',
							crucial: false,
						},
						{
							naam: 'Reporting',
							crucial: false,
						},
						{
							naam: 'Werkinstructie',
							crucial: false,
						},
						{
							naam:
								'Behandelen meldingen openbare ruimte 1. Overlast personen en groepen  2. Handhaving op afval  3. Overlast openbare ruimte  4. Overig (= her-categoriseren) 5. Overlast boten 6. Overlast geluid evenementen 7. Overlast horeca: vrijdag- en zaterdagavond en nacht  8. Wegen, verkeer, straatmeubilair   ',
							crucial: false,
						},
						{
							naam:
								'Telefonische intake van meldingen, na doorverbinden CCA of Interswitch: - Overlast personen en groepen - Overlast boten  - Overlast geluid evenementen  - Overlast evenementen  ',
							crucial: false,
						},
						{
							naam: 'Afhandelen oproepen naar 14 020 buiten openingsuren CCA',
							crucial: false,
						},
						{
							naam:
								'Meldingen overzetten over wonen van SIA naar formulier Wonen',
							crucial: false,
						},
						{
							naam:
								'Meldingen uitzetten van Onherroepelijk Veroordeelden in de Stadsloketten ',
							crucial: false,
						},
						{
							naam:
								'Ondersteunen Webcare-team bij afhandeling WhatsApp berichtenverkeer ',
							crucial: false,
						},
						{
							naam:
								'Stadsloket: parkeervergunning aanmaken na toekenningsbrief bewoners of bedrijven',
							crucial: false,
						},
						{
							naam:
								'Stadsloket: parkeervergunning bewoners, bedrijven, gehandicapte bewoners en bezoekers',
							crucial: false,
						},
						{
							naam:
								'Stadsloket: parkeervergunning hulpverleners, mantelzorg, volkstuin, sportvereniging, op code',
							crucial: false,
						},
						{
							naam: 'Stadsloket: garagepas',
							crucial: false,
						},
						{
							naam: 'Stadsloket: parkeervergunning bewoners',
							crucial: false,
						},
						{
							naam: 'Stadsloket: wijzigen betaalwijze',
							crucial: false,
						},
						{
							naam: 'Stadsloket: Parkeerkaarten',
							crucial: false,
						},
					],
				},
				{
					naam: 'IV',
					kernprocessen: [
						{
							naam:
								'Functioneel beheer van Belastingen-applicaties  • Herstellen processen Heffen, Innen, bezwaar, WOZ (Herstel Key2Belastingen)) • Herstellen proces WOZ waardering (Herstel Ortax) ',
							crucial: false,
						},
						{
							naam:
								'Functioneel beheer van telefonieplatform voor Dienstverlening (CCA) zodat de gemeente telefonisch bereikbaar blijft - Applicatie Quandago Aloha ',
							crucial: false,
						},
						{
							naam:
								'Functioneel beheer van de applicaties, ter ondersteuning van de bedrijfskritische processen bij Vergunningen én in een keten.  ',
							crucial: false,
						},
						{
							naam:
								'Functioneel beheer voor overige directies (OIS, SBL, SAA, M&A, CTO) benoemde bedrijfskritische processen.',
							crucial: false,
						},
						{
							naam:
								'Functioneel beheer van de applicaties welke ondersteunen bij bedrijfskritische processen bij Basisinformatie én in een keten.  ',
							crucial: false,
						},
					],
				},
				{
					naam: 'Monumenten',
					kernprocessen: [
						{
							naam: 'Instandhouding en duurzaam gebruik van erfgoed',
							crucial: false,
						},
					],
				},
				{
					naam: 'OIS',
					kernprocessen: [
						{
							naam: 'Crisis- en incidentmanagement',
							crucial: false,
						},
						{
							naam: 'Inzet bestuurlijk instrumentarium burgemeester. ',
							crucial: false,
						},
					],
				},
				{
					naam: 'Stadsarchief',
					kernprocessen: [
						{
							naam:
								'Beveiliging van het gebouw en met name  de ruimtes waar zich originele stukken bevinden. Dat zijn de depots, de tentoonstellingsruimte, schatkamer, de studiezaal, de bewerkingsruimte en het restauratie atelier.',
							crucial: false,
						},
						{
							naam:
								'Klimaatbeheersing van de ruimtes waar zich originele stukken bevinden regelen en monitoren. Dat zijn de depots, de tentoonstellingsruimte, schatkamer, de studiezaal, de bewerkingsruimte en het restauratie atelier.',
							crucial: false,
						},
					],
				},
				{
					naam: 'Stadsbank van Lening',
					kernprocessen: [
						{
							Directie: 'Stadsbank van Lening',
							naam: 'Beheer van gevonden voorwerpen ',
							crucial: false,
						},
						{
							Directie: 'Stadsbank van Lening',
							naam: 'Belenen',
							crucial: false,
						},
						{
							Directie: 'Stadsbank van Lening',
							naam: 'Herbelenen bij loket',
							crucial: false,
						},
						{
							Directie: 'Stadsbank van Lening',
							naam: 'Lossen',
							crucial: false,
						},
					],
				},
			],
		},
		{
			naam: 'Gebiedsgericht werken en stadsbeheer',
			directies: [
				{
					naam: 'Begraafplaatsen',
					kernprocessen: [
						{
							naam: 'Begraven en cremeren',
							crucial: true,
						},
					],
				},
				{
					naam: 'Bestuur en Organisatie, IAV, Veiligheid',
					kernprocessen: [
						{
							naam: 'Crisisbeheersing',
							crucial: true,
						},
						{
							naam: 'Meldpunt zorg en woonoverlast',
							crucial: true,
						},
						{
							naam: 'Incidenten – gerichte acties, maatregelen en nazorg',
							crucial: true,
						},
						{
							naam: 'Aansturing toezichthoudende partijen',
							crucial: true,
						},
						{
							naam: 'Bestuurlijke besluitvorming',
							crucial: false,
						},
						{
							naam:
								'Terugkeer & begeleidingsgesprekken (opgelegd door rechter, uit te voeren binnen 48 uur)',
							crucial: false,
						},
						{
							naam: 'Rol bestuur in nazorg',
							crucial: false,
						},
					],
				},
				{
					naam: 'Camping Vliegenbos',
					kernprocessen: [
						{
							naam: 'Openstelling en bereikbaarheid camping en horeca',
							crucial: false,
						},
						{
							naam: 'Administratieve koppeling met SDAN',
							crucial: false,
						},
						{
							naam:
								'Ontvangst gasten uit mogelijke risiscogebieden en daardoor contact met andere gasten en collega’s',
							crucial: false,
						},
					],
				},

				{
					naam: 'Gebiedspool',
					kernprocessen: [
						{
							naam:
								'Subsidieprocessen in het kader van de uitvoering van de sociale basis . ',
							crucial: false,
						},
					],
				},
				{
					naam: 'Vergunningen, Toezicht en Handhaving',
					kernprocessen: [
						{
							naam: 'Crisisbeheersing',
							crucial: true,
						},
						{
							naam: 'Meldpunt zorg en woonoverlast',
							crucial: true,
						},
						{
							naam: 'Incidenten – gerichte acties, maatregelen en nazorg',
							crucial: true,
						},
						{
							naam: 'Aansturing toezichthoudende partijen',
							crucial: true,
						},
						{
							naam: 'Bestuurlijke besluitvorming',
							crucial: false,
						},
						{
							naam:
								'Terugkeer & begeleidingsgesprekken (opgelegd door rechter, uit te voeren binnen 48 uur)',
							crucial: false,
						},
						{
							naam: 'Rol bestuur in nazorg',
							crucial: false,
						},
						{
							naam:
								'Handhaving bij calamiteiten en incidenten.  (bouw en gebruik)',
							crucial: true,
						},
						{
							naam: 'Gemeentelijke noodwachtdienst.',
							crucial: true,
						},
						{
							naam:
								'Behandelen aanvraag omgevingsvergunning  in applicaties Squit en Powerbrowser. ',
							crucial: false,
						},
						{
							naam:
								'Behandelen aanvragen evenementen- en horecavergunningen in applicatie Decos. ',
							crucial: false,
						},
						{
							naam:
								'Behandelen huisvestings- gerelateerde vergunningen in applicatie Liaan. ',
							crucial: false,
						},
						{
							naam:
								'Behandelen ligplaats- vergunningen voor woonboten en bedrijfsvaartuigen in Squit. ',
							crucial: false,
						},
						{
							naam:
								'Afhandelen 2e lijns algemene Wabo klantinformatie; telefonisch, per mail of via balie in applicaties Squit, Powerbrowser en Liaan. ',
							crucial: false,
						},
						{
							naam:
								'Toezicht op verleende omgevingsvergunningen Bouw- en Sloop in applicaties Squit, DCL en Powerbrowser. ',
							crucial: false,
						},
						{
							naam:
								'Toezicht brandveiligheid in applicaties Squit, DCL en Powerbrowser.',
							crucial: false,
						},
						{
							naam:
								'Toezicht en Handhaving overige wet- en regelgeving (o.a. splitsen/samenvoegen). ',
							crucial: false,
						},
						{
							naam:
								'Toezicht en Handhaving Horeca- en Milieu in digitale checklisten en Powerbrowser. ',
							crucial: false,
						},
						{
							naam: 'Ondertekening besluiten. ',
							crucial: false,
						},
						{
							naam:
								'Ondersteunende werkzaamheden om de processen hierboven beschreven te faciliteren: binnenhalen, inboeken en doorzetten van aanvragen en voorzien in publicatie in applicaties Squit, Powerbrowser en Decos. ',
							crucial: false,
						},
						{
							naam:
								'Juridische ondersteuning om de processen hierboven beschreven te faciliteren. ',
							crucial: false,
						},
					],
				},
			],
		},
		{
			naam: 'Interne Dienstverlening',
			directies: [
				{
					naam: 'Clusterstaf',
					kernprocessen: [
						{
							naam:
								'Ondersteuning en advisering stedelijk directeur en directeuren team ID op ieder gebied',
							crucial: false,
						},
					],
				},
				{
					naam: 'Communicatie',
					kernprocessen: [
						{
							naam:
								'Crisiscommunicatie en voorlichting  100%- plaatsen nieuwsbereichten, ondersteuning wetelijke taken, crisiscommunicatie veiligheidsregio en woordvoering  ',
							crucial: true,
						},
						{
							naam:
								'Informatievoorziening /dienstverlening aan Amsterdammer (communicatie extern) 70%  - onderhouden website, nieuwsbrieven en social media en ondersteuning bij wettelijke taken. ',
							crucial: true,
						},
						{
							naam:
								'Communicatie Intern - onderhouden intranet, tamtam, ondersteunne wettelijke taken',
							crucial: false,
						},
						{
							naam:
								'Inhuur en inzet externen en financiële processen- vervanging OG mbt externen, fin. goedkeuring uren en doorbelasting OG. ',
							crucial: false,
						},
						{
							naam:
								'Voorbereiding en vergunningverlening risicovolle C evenementen - vergunningverlening, omgevingsmanagement en inkoop productiemiddelen',
							crucial: false,
						},
						{
							naam: 'Relatiebeheer en protocol',
							crucial: false,
						},
					],
				},
				{
					naam: 'FacilitairBureau',
					kernprocessen: [
						{
							naam:
								'Beveiliging van de gemeentelijk organisatie - Openen en sluiten van cruciale locaties ',
							crucial: true,
						},
						{
							naam:
								'Beveiliging van de gemeentelijke organisatie - Open en sluiten van locaties voor alarmeringen en noodopeningen',
							crucial: false,
						},
						{
							naam:
								'Beveiliging van de gemeentelijke organisatie - Niet meer kunnen beveiligen van agressielocaties (GGD/WPI)',
							crucial: false,
						},
						{
							naam:
								'Beveiliging van de gemeentelijke organisatie - Beveiliging algemene panden/kantoorlocaties',
							crucial: false,
						},
						{
							naam:
								'Beveiliging van de gemeentelijke organisatie - Bezetting gemeentelijke alarmcentrale ',
							crucial: false,
						},
						{
							naam:
								'Veiligheid van de gemeentelijke organisatie- BHV organisatie mbt ontruiming',
							crucial: false,
						},
						{
							naam:
								'Zorgen voor een hygiënische werkomgeving van de gemeentelijk organisatie- schoonmaken sanitaire keuken en cateringvoorzieningen',
							crucial: false,
						},
						{
							naam:
								'Zorgen voor een veilige  werkomgeving van de gemeentelijk organisatie- oplossen incidenten met directe impact op werklocaties.',
							crucial: false,
						},
					],
				},
				{
					naam: 'Financiele dienstverlening',
					kernprocessen: [
						{
							naam: 'Salarisbetaling, uitkeringen en salarissen WPI, WMOned',
							crucial: true,
						},
						{
							naam: 'Bestellen tot en met Betalen',
							crucial: false,
						},
						{
							naam: 'Subsidieverwerking   ',
							crucial: false,
						},
					],
				},
				{
					naam: 'ICT',
					kernprocessen: [
						{
							naam:
								'Het leveren van een toekomstvaste, betrouwbare en veilige ICT-infrastructuur voor de gemeente Amsterdam. De ICT-infrastructuur is een stabiele basis voor de gemeentelijke informatievoorziening en waar nodig die van haar ketenpartners waarlangs producten en diensten worden geleverd aan burgers, bedrijfsleven en publieke organisaties. ',
							crucial: true,
						},
					],
				},
				{
					naam: 'IV',
					kernprocessen: [
						{
							naam: 'Het afhandelen van meldingen door de IV Desk ',
							crucial: false,
						},
						{
							naam: 'Het beheer van systemen (mbt bedrfijsvoeringsprocessen), ',
							crucial: false,
						},
						{
							naam: 'Post registratie',
							crucial: false,
						},
					],
				},
				{
					naam: 'Jurdisch Bureau',
					kernprocessen: [
						{
							naam: 'Afhandelen bezwaar en beroep voor stadsdelen, Thor, Weesp',
							crucial: false,
						},
						{
							naam: 'Juridisch adviseren stadsdelen en Thor en Weesp',
							crucial: false,
						},
					],
				},
				{
					naam: 'P&O',
					kernprocessen: [
						{
							naam:
								'Salarisverwerking (inclusief uitkeringen (BWW en NWW) en pensioenen)',
							crucial: true,
						},
						{
							naam: 'Informatieverstrekking - werkgeversverklaring',
							crucial: false,
						},
						{
							naam: 'Calamiteitenproces',
							crucial: false,
						},
						{
							naam: 'Signaalfunctie P-desk',
							crucial: false,
						},
					],
				},
				{
					naam: 'VGA',
					kernprocessen: [
						{
							naam:
								'Behandeling van schaden inzake aanspraken van derden tegen de gemeente Amsterdam. Maar ook impactvolle schaden aan eigendommen van de gemeente.',
							crucial: false,
						},
						{
							naam:
								'Het beoordelen van risico’s en in (voorlopige) dekking nemen dan wel dekking regelen (bemiddeling)   ',
							crucial: false,
						},
						{
							naam: 'Functionerende ICT en ondersteuning',
							crucial: false,
						},
						{
							naam: 'Ondersteuning van uit financiën',
							crucial: false,
						},
					],
				},
			],
		},
		{
			naam: 'Ruimte & Economie',
			directies: [
				{
					naam: 'Economische zaken',
					kernprocessen: [
						{
							naam: 'Dienstverlening van IN Amsterdam',
							crucial: false,
						},
					],
				},
				{
					naam: 'IngenieursBureau',
					kernprocessen: [
						{
							naam: 'OVL – openbare verlichting ',
							crucial: false,
						},
						{
							naam: 'VRI – verkeersregelinstallaties ',
							crucial: false,
						},
						{
							naam: 'Bij uitvoering van projecten het verkeer regelen. ',
							crucial: false,
						},
					],
				},
				{
					naam: 'IV',
					kernprocessen: [
						{
							naam:
								'Ondersteuning van de voor de verschillende directies benoemde kritieke bedrijfsprocessen ',
							crucial: false,
						},
					],
				},
				{
					naam: 'Kunst en Cultuur',
					kernprocessen: [
						{
							naam: 'Subsidieproces',
							crucial: false,
						},
						{
							naam: 'Besluitvorming Kunstenplan 2021-2024',
							crucial: false,
						},
					],
				},
				{
					naam: 'Metro en Tram',
					kernprocessen: [
						{
							naam: 'Exploitatie openbaar railvervoer',
							crucial: false,
						},
						{
							naam:
								'Ondersteunende bedrijfsvoering processen, w.o. het financieel administratief proces',
							crucial: false,
						},
						{
							naam: '(preventief) beschermen van de infra',
							crucial: false,
						},
						{
							naam: 'Bescherming operationele techniek (cyber security) en NMA',
							crucial: false,
						},
						{
							naam: 'Continueren van de railinfra',
							crucial: false,
						},
					],
				},
				{
					naam: 'Parkeren',
					kernprocessen: [
						{
							naam: 'Handhaving betaald parkeren op straat',
							crucial: false,
						},
						{
							naam: 'Beschikbaar stellen P&R',
							crucial: false,
						},
						{
							naam: 'Beschikbaar stellen parkeergarages',
							crucial: false,
						},
						{
							naam: 'Parkeerfaciliteiten evenementen Arena',
							crucial: false,
						},
						{
							naam: 'Beschikbaar stellen fietsenstallingen',
							crucial: false,
						},
						{
							naam: 'Fietsdepot beschikbaar voor opnemen en uitgifte fietsen',
							crucial: false,
						},
					],
				},
				{
					naam: 'PMB',
					kernprocessen: [
						{
							naam:
								'Het werken in opdracht op basis van offerte en uurtarief. De dienstverlening bestaat uit het leveren van capaciteit.',
							crucial: false,
						},
						{
							naam: 'Zorgdragen voor een goede match: ',
							crucial: false,
						},
						{
							naam:
								'Zorgdragen voor een goede bemensing van PMB en het goed toegerust zijn van medewerkers voor het uitvoeren van de dienstverlening die PMB biedt.',
							crucial: false,
						},
						{
							naam: 'Zorg voor de administratieve / financiële afwikkeling ',
							crucial: false,
						},
						{
							Directie: 'R&D',
							naam:
								'Bestuurlijke processen (die voornamelijk  aan termijn zijn verbonden)',
							crucial: false,
						},
						{
							Directie: 'R&D',
							naam: 'Bedrijfsvoeringprocessen',
							crucial: false,
						},
					],
				},
				{
					naam: 'R&D',
					kernprocessen: [
						{
							Directie: 'R&D',
							naam:
								'Bestuurlijke processen (die voornamelijk  aan termijn zijn verbonden)',
							crucial: false,
						},
						{
							Directie: 'R&D',
							naam: 'Bedrijfsvoeringprocessen',
							crucial: false,
						},
					],
				},
				{
					naam: 'V&OR',
					kernprocessen: [
						{
							naam: 'Bereikbaarheid stad a. Wegtunnelbediening',
							crucial: true,
						},
						{
							naam: 'Bereikbaarheid stad b. Verkeersstromen',
							crucial: true,
						},
						{
							naam:
								'Bereikbaarheid stad c. Afwikkelen van storingen (door externe sleutelfunctionarissen)',
							crucial: true,
						},
						{
							naam: 'Bereikbaarheid stad d. Continuïteit veerverbindingen',
							crucial: true,
						},
						{
							naam: 'Repareren kritieke tunneltechnische installaties',
							crucial: false,
						},
						{
							naam:
								'Beschikbaarheid centrale ICT inclusief netwerkverbindingen (VOR-IN dus niet ADW)',
							crucial: false,
						},
						{
							naam: 'Bruggen & Kades',
							crucial: false,
						},
					],
				},
				{
					naam: 'Vastgoed',
					kernprocessen: [
						{
							naam: 'Bereikbaarheid telefoonnummer reparatieverzoek.',
							crucial: false,
						},
						{
							naam:
								'Beheer gebouwgebonden installaties van panden met gemeentelijke huisvesting zoals de Stopera en stadsdeelkantoren.',
							crucial: false,
						},
						{
							naam: 'Planmatig onderhoud lopende projecten',
							crucial: false,
						},
					],
				},
				{
					naam: 'Wonen',
					kernprocessen: [
						{
							naam: 'Wonen a. Urgenties',
							crucial: true,
						},
						{
							naam: 'Wonen b. Noodverblijf',
							crucial: true,
						},
						{
							naam: 'Huisvesting statushouders',
							crucial: false,
						},
					],
				},
				{
					naam: 'Zuidas',
					kernprocessen: [
						{
							naam: 'Uitvoering  bouwwerkzaamheden (opdrachtgever Zuidas).',
							crucial: false,
						},
					],
				},
			],
		},
		{
			naam: 'Sociaal',
			directies: [
				{
					naam: 'Inkomen',
					kernprocessen: [
						{
							naam: 'WPI inkomen: Betaalbaar stellen van de uitkering ',
							crucial: true,
						},
					],
				},
				{
					naam: 'OJZ',
					kernprocessen: [
						{
							naam:
								'Betaalbaar stellen geleverde dienstverlening Wmo-zorg, Jeugdzorg en Leerlingenvervoer',
							crucial: true,
						},
						{
							naam:
								'OJZ intern: Leveren van Wmo-Zorg, Jeugdzorg en Leerlingenvervoer aan burgers ',
							crucial: false,
						},
						{
							naam:
								'Onderwijs  (Afdeling Onderwijs heeft een eigen Corana-team ingesteld, dit betreft externe capaciteit.)',
							crucial: false,
						},
					],
				},
				{
					naam: 'Sport en Bos',
					kernprocessen: [
						{
							Directie: 'Sport en Bos',
							naam:
								'Dienstverlening beheeractiviteiten sportaccommodaties en Amsterdamse Bos + evenementen',
							crucial: false,
						},
						{
							Directie: 'Sport en Bos',
							naam:
								'Sport en Bos  Maandelijkse betaling (inkoop) sport-/beweegaanbieders stimulering  ',
							crucial: false,
						},
					],
				},
				{
					naam: 'WPI',
					kernprocessen: [
						{
							Directie: 'WPI',
							naam:
								'Werk en Participatie (Wettelijke taak voor circa 39.000 uitkeringen.)',
							crucial: false,
						},
					],
				},
			],
		},
		{
			naam: 'Stadsbeheer',
			directies: [
				{
					naam: 'Afval en Grondstoffen',
					kernprocessen: [
						{
							naam:
								'Afvalinzameling  Ondergrondse containers / achterbelading minicontainers / achterbelading zakken / grofvuil',
							crucial: true,
						},
						{
							naam: 'Meldpunt openbare ruimte en overlast',
							crucial: true,
						},
						{
							naam: 'Afvalinzameling / Grofvuil Afvalpunten (AEB)',
							crucial: false,
						},
						{
							naam: 'Afvalinzameling / Bijplaatsingen (TAM team)',
							crucial: false,
						},
						{
							naam: 'Afvalinzameling / GFE/T (uitbesteed Meerlanden) ',
							crucial: false,
						},
						{
							naam: 'Afvalinzameling / Afvalverwerking Rest (AEB)',
							crucial: false,
						},
						{
							naam:
								'Afvalinzameling /Afvalverwerking Glas en Grof (uitbesteed Renewi)',
							crucial: false,
						},
						{
							naam: 'Inhuur uitzendkrachten (Olympia)',
							crucial: false,
						},
						{
							naam:
								'Fleetmanagement (uitbesteed onderhoud wagenpark en materiaal)',
							crucial: false,
						},
						{
							naam: 'Strategie en Projecten',
							crucial: false,
						},
						{
							naam: 'Besluitvorming en tekenbevoegdheid managementteam ',
							crucial: false,
						},
					],
				},
				{
					naam: 'Stadswerken',
					kernprocessen: [
						{
							naam: 'Schoonhouden openbare ruimte (schoon)',
							crucial: true,
						},
						{
							naam:
								'Infra en Service: a. Calamiteitendienst (Incl. GFF, Schoon & Civiele Constructies)',
							crucial: true,
						},
						{
							naam: 'Infra en Service: b. Risicovolle SIA meldingen ',
							crucial: true,
						},
						{
							naam:
								'Infra en Service: c. Herstel opbrekingen nuts- en telecomwerkzaamheden (bijv. bij storingen)',
							crucial: true,
						},
						{
							naam:
								'Infra en Service: tijdelijke verkeersmaatregelen (omleidingen, afzettingen)',
							crucial: false,
						},
						{
							naam: 'Markten: Ambulante handel laten plaatsvinden',
							crucial: false,
						},
						{
							naam:
								'GFF: bomen in wijken en parken bij stormachtige weersomstandigheden',
							crucial: false,
						},
						{
							naam: 'GFF: Hoog verzuim bij de externe aannemer/Brandweer',
							crucial: false,
						},
						{
							naam: 'GFF: Pand Rozenburglaan 2 afgesloten',
							crucial: false,
						},
						{
							naam:
								'Weesp: bomen in wijken en parken bij stormachtige weersomstandigheden',
							crucial: false,
						},
						{
							naam:
								'Logistiek: materiaal en materieel ten behoeve van Stadswerken en V&OR (Projecten/IB)',
							crucial: false,
						},
						{
							naam:
								'Logistiek: Ter beschikking stellen van materiaal en materieel ten behoeve van Stadswerken en V&OR (Projecten/IB) afroep, bestellen en opslaan.',
							crucial: false,
						},
						{
							naam: 'Schoon: Onderhoud parken en stranden door Schoon',
							crucial: false,
						},
						{
							naam:
								'OO-EC: Veilig gebruik en veilig houden van de openbare ruimte',
							crucial: false,
						},
						{
							naam:
								'OO-SIA:  Afhandelen van de meldingen en terugkoppeling richting de burger.',
							crucial: false,
						},
						{
							naam:
								'Civiele Constructies: storingsdienst beweegbare bruggen en tunnels',
							crucial: false,
						},
					],
				},
				{
					naam: 'THOR',
					kernprocessen: [
						{
							naam:
								'Toezicht en Handhaving a. Toezicht in de openbare ruimte en toezicht  in/rond openbaar vervoer.',
							crucial: true,
						},
						{
							naam: 'Toezicht en Handhaving b. Vrijhouden calamiteitenroutes',
							crucial: true,
						},
						{
							naam:
								'Toezicht en Handhaving c. Ondersteunen politie- en hulpdiensten',
							crucial: true,
						},
						{
							naam:
								'Informeren van de burger in de openbare ruimte/openbaar vervoer (in geval van calamiteiten, maatschappelijke onrust etc)',
							crucial: false,
						},
						{
							naam:
								'Bewaken en beveiligen kwetsbare objecten en locaties in de buitenring en passend in taken en bevoegdheden van THOR',
							crucial: false,
						},
						{
							naam:
								'Cameratoezicht als instrument inzetbaar in plaats van toezicht en handhaving door medewerkers buiten',
							crucial: false,
						},
					],
				},
			],
		},
	],
};

module.exports = kernprocess;
