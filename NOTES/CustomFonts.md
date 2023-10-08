# Fonts

- import fonts from next package
  - this will download the fonts from google and serve them from our app
- stantiate an object and set properties
- use the {font}.classname set in the className prop

```javascript
import { Roboto } from "next/font/google";

// create object for using a custom font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // not needed if using a variable font (like open sans), variable fonts use a single file to represent a wide range of font styles
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={roboto.className}>//...</body>
    </html>
  );
}
```

### Custom Fonts

- Add a custom font to the /public folder (create a new folder /fonts/ inside /public/)
- place your font file (.woff2) in the public/fonts folder
- import the font and set it up like above, instantiate it and use the .classname in className:

```javascript
import localFont from "next/font/local";

const poppinsFont = localFont({
  src: "../public/fonts/poppins-regular-webfont.woff2",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={poppinsFont.className}></body>
    </html>
  );
}
```

#### Using Tailwind
- set a variable property for the custom css property name on the local font instantiation
- Go to the Tailwind config (tailwind.config.ts)
