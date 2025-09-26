# SwapHub - Eksams opgave
Liva Kuhlmann

WU12 - Hovedforløb

## Sådan kommer du i gang
`cd api`    
`npm i`    
`npm start`

`cd projekt`    
`npm i`    
`npm run dev`

## Valgfri opgave:
Jeg har lavet valgfri opgave B      
Jeg har lavet valgfri opgave C

## Tech Stack
### React
* React er et front-end bibliotek der giver mulighed for at opdele kode i komponenter og håndtere states på et let og overskuelig måde.
* React er meget anvendt, godt dokumenteret, understøttet og har stor efterspørgelse på udviklere.
* Jeg har valgt at bruge React i dette projekt, da jeg synes arbejdsprocessen er letforståelig og meget intuitiv. Jeg synes at deres markup syntax --JSX-- og komponent opdeling er super nem at arbejde med, når man først har lært det.

**Hvorfor React?**
* React føler jeg med mest komfortabel med over for andre mindende ting såsom Webpack og Wordpress.
* Jeg fortrækker React over de her 2 begrund af forskellige årsager. Lad os starte med Webpack.
* Da jeg lærte Webpack var der meget der skulle gøres før man overhovedet kunne gå i gang. Jeg syntes ikke den bragte særlige brugbare ting frem. Hvad den havde jeg kunne lide, var bedre og nemmere i React.
* Wordpress har jeg det bedre med end Webpack. Wordpress var meget fin at arbejde med. Det var simpelt og nemt at sætte en side op. Men selvom der er muligheder for at skrive kode, savnede jeg stadig den del af webudvikling.
* React tilbyder mig mest at det jeg synes gør kodning sjovt og spændende, derfor har jeg valgt at bruge React.

### Next.js
* Next.js er et front-end framework baseret på React.
* I Next.js er der bl.a. adgang til server-side komponenter, server-actions og mappe-baseret routing.
* Server-side komponenter og funktioner's sikkerhed har nogle større fordele, da alt koden afvikles i serveren i stedet for klienten.
* Jeg har valgt at bruge Next.js fordi den kommer med de sidste dele der gør React så god at arbejde med. Med brug af Next.js kan jeg sætte mit projekt op endnu hurtigere og let gå i gang med at arbejde.
* Med route groups er det nemt at danne forskellige layouts og bare lægge siderne under.

**Hvorfor Next.js?**
* En anden mulighed kunne havde være at bruge vite i stedet.
* Jeg har lavet mange projekter med vite og da jeg først lærte Next.js, tænkte jeg faktisk vite var meget bedre. Men siden da har jeg ændret mening, Next.js er både simplere at sætte op og så hjælper det mig med at lave bedre optimisation.
* Årsager som dette, er derfor jeg har valgt at bruge Next.js

### Git
* Git er et versionsstyringsværktøj, som giver muligheden for lave branches og versioner af koden, så det er let at gå tilbage til tidligere versioner, hvis behovet for ændringer ankommer.
* Jeg har valgt at bruge Git sammen med Github.
* Jeg bruger Git/Github begrund af den's simpelhed og brugbarhed. Bare sæt det op en gang og så virker alt. Nu har jeg altid et sted min kode bliver gemt, hvis nu jeg skulle miste filerne.

**Hvorfor Git/Github?**
* I stedet for GitHub er der GitLab. Jeg har selv aldrig roddet med GitLab, men min forståelse er at hvad mange folk kan lide, er hvordan den er inbygget.
* Tilgengælg er den's user interface langsom. GitLab er ikke ligeså populær, så GitHub kan være nemmere at finde hjælp til, eller bare lettere forståelig.
* Jeg vælger GitHub sammen med Git da det er super nemt for mig at sætte et nyt repository op, og nemt finde rundt i mine branches eller repositories. GitHub er lettere forståelig i min mening.

### Zod
* Zod er et valideringsbibliotek hvor man kan lave schemas til at validere data fra simple strings, til komplekse objects.
* I dette projekt har jeg anvendt Zod til at validere bruger-input fra formularer.
* Jeg har valgt Zod fordi den er en stor hjælp i at validere data uden meget besvær. I stedet for en masse conditional statements med forvirrende regex osv. kan man hurtigt og simpelt validere med Zod og sende fejlbeskeder nemt tilbage til brugeren.

**Hvorfor Zod?**
* Alternativet til Zod for mig ville være da jeg stadig selv ville lave min validering med adskellige conditional statements, forvirrende regex og manuelle fejl beskeder.
* Zod virker effektivt til at dette, derfor vælger jeg Zod.

### RESTful Web-API
* Jeg bruger et REST (REpresentational State Transfer) API --hvilket er en undergruppe af Web API-- til at få adgang til SwapHub's data via et interface.

### SASS
* Sass er en udvidelse til CSS, som giver muligheden til at lave variabler, nesting, mixins og funktioner.
* Sass er stort udbredt.
* Jeg har valgt Sass for dens evne til at simpelt opdele CSS i moduler og dermed kan jeg genbruge kode flere steder.
* Jeg synes Sass' syntax er intuitiv og (om det er med vilje eller ej,) opfordrer til at bruge en navnekonvation såsom BEM, begrund af de udvidelser Sass medbringer såsom nesting.

**Hvorfor Sass?**
* I stedet for Sass, kunne jeg havde valgt TailwindCSS.
* Min begrundelse til jeg har valgt Sass lægger mest i at jeg fortrækker strukturen Sass medbringer.
* Jeg kan godt se hvorfor Tailwind bliver brugt i stedet, da man har adgang til hurtige shortcuts til often brugte stylings. Men for mig synes jeg strukturen fylder for meget vandret, det er sværere at forstå hvad der sker ved at kigge på det. Jeg kan ikke genbruge klasser fordi stylingen er klasser, så hvis noget styles ens, skal jeg kopiere alt hend, eller lave virkelig mange elementer til kompontenter.
* Jeg nyder rigtigt meget den del af kodning der er at style, med Tailwind får jeg bare ikke den samme følelse.
* Sass' nesting struktur er præcis hvad jeg kan lide. Det er mere overskueligt, og jeg er mere effektiv med det. Derfor vælger jeg Sass.

### React-icons
* React-icons er et ikon-bibliotek, anvendt til React.
* React-icons er smart da den kun importere de ikoner der bliver brugt i projektet. Dvs. på production har du kun filer der lægger og fylder til de ikoner der er behov for.
* Jeg har valgt React-icons da den gør det simplere og nemmere for mig at tilføje ikoner.

**Hvorfor React-icons?**
* Inden jeg om lærte om React-icons, ville jeg manuelt finde svg'er på svgrepo og downloade dem ned.
* Med React-icons kan jeg nemt og hurtigt importere et bestemt ikon ind.
* Derfor vælger jeg React-icons i stedet for min gamle metode jeg brugte inden jeg kendte til det.

## Kode eksempel
SearchForm komponent (components/search-form/search-form.jsx)
```jsx
function SearchForm({ listings }) {
    const { setResults, setAllResults, sorting } = useContext(listingsContext);
    const [formState, formAction, isPending] = useActionState(searchAction);
    const router = useRouter();

    // ...

    useEffect(() => {
        if (!formState) return;
        if (!formState.success && formState.properties.query.errors) {
            router.replace('?page=1', { scroll: false });
            const sortedListings = sorter(listings, sorting);
            setResults(sortedListings);
            setAllResults(sortedListings);
            return;
        };

        router.replace('?page=1', { scroll: false });
        if (typeof (formState.results) === 'string') {
            setResults(formState.results);
            setAllResults([]);
            return;
        };

        setResults(formState.results.slice(0, 6));
        setAllResults(formState.results);
    }, [formState]);

    // ...
}
```
I min SearchForm bruger jeg en React hook useContext sammen med min provider. Min provider gør at jeg kan fra forskellige komponenter, få adgang til de states defineret i den.     
Jeg bruger 3 andre React hooks, useActionState, useRouter og useEffect. Mine setters (f.eks. setResults) er også React hooks (useState) men de bliver kaldet i provideren.  
React hooks er indbygget react funktioner. De fleste hooks har noget med state management at gøre.      
Jeg udnytter destructering ved useContext, useActionState og i selveste mit komponent hvor jeg tager i mod et parameter der indeholder det fetchede data fra api'et.    
Jeg fetcher min data på min page (Med brug at en custom util der håndtere fejl for mig) og giver det videre til mit komponent som en property.

I min useEffect's dependency array har jeg tilføjet et parameter (formState) til at køre koden igen hvis en ændring er sket til dens værdi. Som standard, ville min useEffect kører efter initial mount.

Inde i min useEffect starter jeg med en guard clause der stopper resten med at køre hvis formState er falsy (null, undefined, 0, false).     
Derefter har jeg en conditional statement der lytter på 2 conditions som begge skal være opfyldt med logical and.   
I denne if statement starter jeg med at bruge useRouter hook'en til at ændre mit search param.   
Jeg bruger en util jeg har lavet til at sortere sidens indhold baseret på sorting's værdi.  
Til sidst i denne statement, bruger jeg mine setters til at ændre indholdet der vises på siden. Jeg bruger en return da intet andet kode skal køres.   
Jeg har endnu en if statement, der håndterer hvad der sker når ingen listings er blevet fundet. Denne slutter også af med en return.    
Til sidst i useEffect'en håndteres der hvad der skal ske, hvis ingen fejl er opstået. Resultaterne bliver allerede sortede her inde i min server-action.

## Ændringer i designet
### Heading
* Mange af siderne var ikke designet med en tydelig main heading (h1) i min mening.
* Derfor har jeg valgt at tilføje en til de sider der mangler, på en måde jeg synes stadig passer til designet

### Header sign in
* Jeg har ændret teksten "sign in" til at være login. Det samme på selveste siden.
* Dette har jeg gjort fordi i min egen mening, hedder det "sign up" og "login".
* Jeg har dog ikke valgt at ændre "register" da den er fin nok.

### Filtering
* På forsiden er der 3 forskellige måder man kan filtrere (uden ekstra opgave).
* Jeg har ændret dette til 4 og lavet price asc og desc om til old, a-z og z-a.
* Dette gjorde jeg da der overhovedet ikke er priser på bytte-tingene. Disse katogorier giver bedre mening synes jeg selv.

### Login side "Forgot password?"
* Jeg har fjernet teksten der siger "Forgot password?" da sådan en funktion ikke er tilgængelig via api'et.

## Skalering
Selvom på designet er der kun 1 slags layout, har jeg valgt stadig at sætte route groups op, så hvis flere sider skulle tilføjes, kan man nemt lave nye layouts.    
Komponenter såsom Footer og Header kan genbruges til de nye layouts, hvis behovet skulle opkomme.

Jeg har opdelt kode i komponenter, så det er nemt at genbruge hvad der allerede er lavet.    
Jeg har lavet funktioner der kan genbruges til at hurtigt få lavet noget nyt (utils & custom-hooks).    
De genbrugelige funktioner/utils/hooks/komponenter er fleksible så de kan bruges til mere end kun 1 slags data/formål.

Jeg har overholdt en bestemt struktur (fil-opsætning/mappe-struktur, navnekonvation osv.) så der hurtigt kan findes rundt, hvis en anden skulle tage over.  
Der er inbygget fejlbeskeder i funktioner såsom fetches og actions, så hvis noget skulle gå galdt er et nemt at finde ud af hvad.

Jeg har været kort --dog beskrivende-- med navne, så der hurtigt kan forstås hvad noget gør (variable navne, komponent navne osv.).