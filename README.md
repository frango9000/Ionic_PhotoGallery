
npm install -g @ionic/cli native-run cordova-res

ionic start photo-gallery tabs --type=angular --capacitor

npm i @ionic/pwa-elements
npm i @babel/compat-data@7.8.0

ionic build

npx cap add android

 * npx cap sync (updates dependencies, and copies any web assets )
 * npx cap copy (copy web assets only)

npx cap open android

(configure "windowsAndroidStudioPath" in your capacitor.config.json)
