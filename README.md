# AdriansDOMStats
Språk/API: Javascript, HTML, CSS / RESTful, Bootstrap.

Beskrivning: Programmet startar upp en pop-up, som dimmar ut bakgrunden och lyser upp sig
själv, där användare kan logga in med användarnamn och lösenord. Om användaren klickar
utanför pop-upen försvinner den och bakgrunden lyses upp. Klickar användaren på ikonen i
mitten, som gjorts runt genom bootstrap, tas login pop-upen upp igen. När användaren klickar
på knappen för att logga in startar javascripten i bakgrunden. Den skickar användarnamnet och
lösenordet till företagets server och returnerar om loginen gick igenom. Om användaren
kommer in hämtas kod och parsas. Endast body-delen parsas ut och “klistras” in över den 
nuvarande body-delen. Datan som finns i den nya bodyn putsas upp/behandlas om med hjälp av 
bootstrap. Detta var ett arbetsprov hos ELK Studios, ett casinoföretag. De var imponerade 
över arbetet, men hittade en annan med något års erfarenhet av RESTful API och valde då den
personen. De har även stängt av förmågan att logga in med användarnamnet och lösenordet därmed 
går det inte att se hur listorna ändrades med hjälp av min bootstrapkod. Men det går att 
observera all annan kod.
