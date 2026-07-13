# digiHosein-React

Persian-language (RTL) e-commerce storefront ("digiHosein" / دیجی حسین). Create-react-app project, not ejected.

## Stack
- React 18 + `react-scripts` 5 (CRA, not Vite)
- Routing: `react-router-dom` v6, all routes declared in [src/App.js](src/App.js), pages other than Home are `React.lazy`
- State: Redux Toolkit, single `cart` slice in [src/redux/cartSlice.js](src/redux/cartSlice.js), persisted to `localStorage` via a custom middleware (keys `userProducts`, `userProductsTotalPrice`)
- Forms: `formik` + `yup`, always via the shared [src/components/common/FormInput.jsx](src/components/common/FormInput.jsx)
- HTTP: single `axios` instance in [src/axiosConfig.js](src/axiosConfig.js) (`axiosBase`), baseURL points at a pythonanywhere backend that is currently unreliable/offline — don't assume API calls succeed
- Styling: Tailwind (`tailwind.config.js`), dark mode via `dark:` classes toggled through `localStorage.theme` (see [src/components/HeaderComponents/ThemeButton.jsx](src/components/HeaderComponents/ThemeButton.jsx))
- Toasts: `react-toastify`, mounted once in `App.js` via `CustomToast`

## Structure
- `src/pages/` — route-level components
- `src/components/<Area>/` — components scoped to a page/section (e.g. `CartPage/`, `SignUpPage/`, `HeaderComponents/`)
- `src/components/common/` — shared primitives (`FormInput`, `Timer`, `SiteLogo`, `CustomToast`)
- `src/layout/SiteLayout.jsx` — page chrome (Header/Footer) wrapping routed pages
- `src/utils/` — small helpers (`BackToUp`, `createEmptyArray`)
- Path imports are absolute from `src` (`jsconfig.json` sets `baseUrl: src`), e.g. `import FormInput from "components/common/FormInput"` — prefer this over relative `../../` paths for anything outside the current folder

## Auth (current state)
Auth is client-only / localStorage-based, not a real backend session:
- `localStorage.token` = `{ token, email }` — presence of this key is the "logged in" check (see [src/components/Header.jsx](src/components/Header.jsx))
- `localStorage.userInformation` = `{ islogin, ... }` — checked in [src/components/CartPage/PurchaseSummary.jsx](src/components/CartPage/PurchaseSummary.jsx) before checkout
- Login/signup/forgot-password/OTP flows previously posted to `Account/Login`, `Account/Send_otp`, `Account/Register`, `Account/ForgetPassword`, `Account/Log_out` on `axiosBase` — the backend for these is unreliable, so these are being migrated to pure `localStorage` mock auth. When touching auth, keep all four surfaces in sync: [src/pages/LoginPage.jsx](src/pages/LoginPage.jsx), [src/components/SignUpPage/SignUpForm.jsx](src/components/SignUpPage/SignUpForm.jsx) + [src/components/SignUpPage/EnterCode.jsx](src/components/SignUpPage/EnterCode.jsx), [src/pages/ForgotPassword.jsx](src/pages/ForgotPassword.jsx), and [src/components/HeaderComponents/UserAccountButton.jsx](src/components/HeaderComponents/UserAccountButton.jsx) (logout).

## Conventions
- New pages: functional component, call `backToUp()` in a mount `useEffect`, wrap root in `className="fadeShow ..."`, register the route in `App.js` (lazy-load unless it's the home page)
- Forms: build `initialValues`/`validationSchema` with `formik`/`yup`, render fields with `FormInput`, submit button `disabled={!formik.isValid}` with the `opacity` inline-style pattern already used on every form
- Loading state: a local `isLoading` (0/1) state swapped for `<AiOutlineLoading3Quarters className="animate-spin" />` inside the submit button — don't introduce a different spinner pattern
- UI text is Persian/RTL — keep new user-facing strings in Persian and match existing phrasing style
- Prettier + `prettier-plugin-tailwindcss` is configured (`prettier.config.js`) — run through prettier, don't hand-format class strings
- No test suite is actually in use beyond the CRA default `App.test.js`; don't assume coverage exists elsewhere

## Commands
- `npm start` — dev server
- `npm run build` — production build
- `npm test` — CRA/Jest (minimal usage today)
