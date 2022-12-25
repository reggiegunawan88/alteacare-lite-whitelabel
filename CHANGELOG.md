## v1.0.0 (2022-09-21)

### Feat

- **form**: create error banner indicator
- **search**: create search result for specializations list
- **search**: create search result page for symptoms
- **price**: add conditional for paid and free fee
- **payment**: test Midtrans QR Gopay
- **doctor-schedule**: trial error click date
- **asset**: add asset for empty state schedule
- **form**: autofill fam relations
- **tnc**: add tnc page on appointment payment
- **meet**: add btn 'Akhiri Panggilan'
- **transaction**: add conditional doctor teleconsul fee
- **doctor-list**: add discount price for doctor
- **transaction**: route back to change doctor and schedule
- **transaction**: choose and update patient
- **nprogress**: add nprogress topbar
- **transaction**: create transaction flow for specific patient
- add local img for doctor empty state
- add transaction to combine reducer
- **transaction**: create transaction redux
- create nprogress topbar
- **bottom-sheet**: fetch patient list by pagination
- **form**: add loading state to form button
- **form**: complete add patient flow
- **document**: add download link to <a>
- **form**: submit data and validate error
- create snackbar reducers
- **form**: submit patient data (without rerouting)
- **form**: add family relation dropdown list
- **form**: create patient functionality with dropdown (90%)
- create API service for add patient
- **doctor-detail**: bottom sheet information func
- **doctor-detail**: doctor information slider func
- **filter**: functionality doctor list filter
- **filter**: append filter qparams with current qparams
- **filter**: handle doctor list multiple filter (as qparam)
- **filter**: rename dispatch filter
- **filter**: select spesialist filter
- **filter**: add constant for price and promotion
- **filter**: fetch and generate filter data from API
- **form**: add create patient API service
- **doctor-list**: filter sort by for doctor list page
- **detail**: integrate canceled appointment page
- **tele-detail**: delete file feature
- **tele-detail**: upload document feature
- **tele-detail**: update UI for fee tab page
- **tele-detail**: integrate data for teleconsul detail tab page
- create skeleton loading for detail
- **teleconsul-detail**: integrate patient data tab with API
- **teleconsul**: functionality cancelled appointment
- **teleconsul**: functionality ongoing teleconsul list
- **teleconsul**: filter by family member for history list
- **helpers**: add jwt parser helper
- **teleconsul**: search keyword on history teleconsultation list
- **teleconsul**: create filter button UI
- **teleconsul**: sort by for teleconsul history list
- **teleconsul**: progressive rendering for history list
- **teleconsul**: integrate teleconsul history with BE
- **search**: add button view more for doctor list
- **search**: integrate search by keyword
- **search**: search page (default) functionality
- **bottom-sheet**: create UI for hospital and doctor list
- add slide animation to teleconsul searchbar
- improve sticky and overflow components
- line break for group of widgets
- **teleconsul**: redirect teleconsul card based on status
- **bottom-sheet**: add show/hide animation slide
- **PWA**: test PWA feature
- **transaction**: add coloring to transaction stage
- **tele**: create teleconsul fee page UI
- **tele**: create document preview page for PDF
- **tele**: create UI page for medical doc tab
- **doctor-notes**: update wording
- **tele**: update wording and icon for doctor notes
- **teleconsultation**: create UI for doctor notes tab
- **teleconsultation**: create UI page for tele detail (patient data)
- hide scrollbar when scrolling on content
- **tele**: create change tab UI on teleconsul detail
- **tele**: create UI for tele detail 'expired' page
- **tele**: create UI for history and cancelled
- **icons**: update png to svg
- **tele**: create UI for empty state teleconsultation
- **tele**: create UI page for ongoing teleconsultation
- **consultation**: create page for each consultation menu
- **form**: slicing UI for personal data form input
- **form**: slicing UI for family member form
- **payment**: slicing UI for virtual acc payment page
- **transaction**: slicing UI for payment success page
- **flow**: link patient drawer to transaction detail
- **payment**: route CC card to CC payment page
- **payment**: slicing UI for credit card payment page
- **payment**: route transaction confirmation to payment list
- **payment**: slicing UI for payment method list
- **transaction**: create transaction status stage info
- **transaction**: slicing UI for terms & condition page
- **transaction**: slicing UI for transaction confirmed page
- **transaction**: slicing UI for transaction detail
- **drawer**: add condition to render each drawer content
- **doctor-list**: slicing UI for sort and patient drawer
- **doctor-detail**: slicing UI for doctor detail page
- **doctor-list**: update UI for date selector
- **doctor-list**: slicing UI for doctor list page
- **mobile-mode**: add max breakpoint on _app.jsx
- **home**: route specialist card to doctor list
- **search**: link doctor card to doctor-list page
- **search**: add router back for search result page
- **search**: slicing UI for search result page
- **search**: slicing UI for search page
- **navigation**: add conditional rendering for icon color
- **white-label**: slicing UI for home page (specialization)
- initial code structure commit
- first commit

### Fix

- **doctor-detail**: add conditional to null about description
- **doctor-schedule**: skip render to available day
- add Div100vh to document preview page
- **filter**: fix doctor filter initial value not loaded
- **doctor-list**: fix error if today doctor list is not available
- **doctor-detail**: fix error if timeslot is not available
- **teleconsul**: fix cancelled appointment detail error
- **env**: update midtrans process.env
- **doctor-detail**: add loop true for slider
- **group-widgets**: fix symptom card flex center
- **doctor-detail**: fix line-clamp-3 for doctor profile desc
- **doctor-list**: fix conditional rendering for loading state
- **midtrans**: update midtrans src by env
- **teleconsul**: fix empty state error catch for teleconsul list
- remove unused props
- **transaction**: fix missing discount label
- **doctor-list**: fix back button to '/'
- **doctor-list**: revert fix infinite scroll
- **teleconsul**: fix unclickable detail tab
- **fetcher**: fix try catch for error resp
- delete unused dispatch
- **doctor-list**: fix back btn loop
- **slider**: revert to slideChanged
- **transaction**: handle free transaction redirect url
- **slider**: update slideChanged into dragged
- **transaction**: fix error create appointment
- **slider**: test fix slider onswipe
- **search**: fix loading state
- **payment**: handle if teleconsul fee is free
- **doctor-detail**: update doctor detail API to v2
- **payment**: delete console log for payment list
- **search**: show specialist and symtom recommend button
- **date-format**: remove helper for 'Hari ini'
- **group-widgets**: update line break into line clamp
- **doctor-schedule**: click and slide to selected day
- **doctor-schedule**: update var name
- **doctor-list**: revert conditional rendering
- **payment-card**: fix border styling for payment card list
- **slider**: slide schedule day on click
- **teleconsul**: fix infinite load data on scroll
- **doctor-list**: fix infinite loading list
- **doctor-schedule**: add empty timeslot state
- **filter**: update margin for searchbar filter
- **filter**: search filter hospital list
- **filter**: search filter specialist list
- **doctor-schedule**: fix slide between schedule
- **med-doc**: fix format date
- **doctor-list**: fix slider for unavailable days
- **tele-detail**: fix btn missing and document rendering
- **doctor-notes**: add border background
- **filter**: fix error apply filter for doctor list
- **doctor-time**: fix incorrect time slot
- **filter**: fix filter error query params
- **canceled**: fix missing ui for detail page
- **transaction**: fix error update patient if only 1 avail
- **doctor-detail**: fix doctor detail UI
- **payment**: fix UI and error when reload page
- **timer**: hide timer if consultation date is expired
- **bottom-sheet**: increase doctor filter height
- **teleconsul**: redirect canceled list
- **teleconsul**: add status for canceled api body
- **teleconsul**: fix show only VIDEO_CALL method
- **doctor-info**: fix hospital icon
- **payment**: fix redirect payment method list 404
- **meet**: add button to continue meet doctor
- **date**: format date into ID time format
- **teleconsul**: handle waiting for med resume status
- **teleconsul**: handle remake teleconsultation button
- **teleconsul**: update searchbar placeholder wording
- **filter-sort**: set initial value for ASC price
- **filter**: fix spacing for doctor list filter
- **transaction**: fix patient info gap
- **teleconsul**: add space between content and btn call
- **teleconsul**: add loading btn indicator before entering meet
- fix timestamp and payment VA page
- **style**: fix teleconsultation card margin
- **doctor-detail**: fix text ellipsis for 'Selengkapnya'
- **style**: test doctor detail styling
- **style**: fix gap into space for bottom sheet filter
- **style**: fix gap into space for margin
- **doctor-detail**: remove h-full
- allow camera and microphone for meet
- **bottom-sheet**: fix height by vh and onclick event
- **home**: fix homepage title wording
- **bottom-sheet**: fix height for bottomsheet filter
- **bottom-sheet**: update height to h-fit
- fix bottom sheet family member
- fix bottom sheet doctor information
- close global component on route change
- **search**: add btn clear keyword
- fix render if payment method is null
- fix error import path
- revert next config
- fix flex layout on teleconsul layout
- **layout**: fix search result page layout overflow
- **layout**: update transaction page layout
- **img**: add empty img for doctor
- **swiper**: fix swiper doctor date and schedule
- **transaction**: fix page pathname
- fix styling margin
- **doctor-detail**: fix page styling
- fix reset subdistrict icon
- add conditional for region name helper
- test remove transition
- **overflow**: fix screen scrolling for mobile
- **doctor-profile**: add first paragraph for dr profile text
- **tele**: fix overflow layout
- **layout**: fix overflow screen
- set tnc api to public API
- wording
- update wording to kelurahan
- redirect to patient form from bottomsheet
- **day**: fix over space typo
- **upload-list**: break words for file name
- **services**: remove user token param
- fix runtime error staging
- **doctor-card**: fix image width height and layout='fixed'
- **search**: hide content if search result is empty
- **search**: fix client side error
- **home**: fix client side error on device testing
- fix path
- update div100vh to layout
- **bottom-sheet**: redirect CTA to personal form page
- **tele**: fix teleconsul list padding and hide scrollbar
- **tele**: fix teleconsultation href link
- **teleconsul**: fix teleconsul content overflow
- **bottom-sheet**: fix minor bug
- **pwa**: change short_name to AlteaCare Lite
- **pwa**: change bg splash screen to white
- **icon**: update sort icon on doctor list
- fix teleconsultation card route
- **teleconsultation**: make detail content div scrollable
- **navigation**: update nav menu router path
- update and fix minor UI
- add gap for fee info
- **home**: fix UI positioning for home page
- **search**: add link to home page
- **home**: fix conditional rendering (remove fragment)
- **redux**: fix reducer type error

### Refactor

- update pay API filename
- **appointment**: update appointment detail api param
- **doctor-schedule**: refactor date selector data
- **teleconsul**: refactor loading method
- update spinner for reusable component
- update doctor detail bottom sheet
- update helpers folder structure
- **transaction**: update transaction component folder name
- **filter**: update specialization data name
- **form**: update create patient form into single page
- update menu tab on teleconsul detail page
- **naming**: update teleconsultation naming convention
- **teleconsul**: update appointment list into single component
- add scroll bottom detector helper
- **redux**: refactor history list redux state
- **bottom-sheet**: update bottom sheet hooks naming
- **teleconsul**: refactor teleconsultation layout and pages
- update pages path
- update layouts name (plural)
- revert layout naming convention
- **layout**: update layout naming folder
- **project**: refactor components folder
- **doctor**: update folder structure for doctor page
- delete doctor layout
- **tele**: split empty state for teleconsultation
- **bottom-sheet**: refactor bottom sheet component
- **layout**: rename back navigation layout
- **payment**: refactor payment page structure
- **project**: update folder structure and naming convention
- **layout**: apply max-width on layout level
- update folder component structure
- **white-label**: split searchbar component
- **eslint**: re-configure eslint for JS
- **project**: convert project base to JS from TS

### Perf

- **icon**: update website icon
- **img**: update priority to lazy loading
- disable Image blur props
- **snackbar**: add dynamic import for snackbar
- add custom server.js
- **project**: add custom server.js and env.example
- **search**: improve loading state
- UI improvement for PWA
- **PWA**: update to alteacare icon
- add priority render to img
- update website favicon.ico
- **redux**: improve shallow equal selector
- **redux**: add shallow equal selector