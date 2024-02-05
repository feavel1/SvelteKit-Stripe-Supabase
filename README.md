# 4S SvelteKit Supabase Stripe Skeleton UI

SvelteKit
Supabase (Auth, Database and Storage provider)
Stripe (Payment system provider)
Skeleton UI

## Currently avaliable functions

- [X]  Login
- [X]  Updata user details
- [X]  Webhooks
- [X]  Subscription Menu
- [ ]  Products Menu (Maybe will add some day)

## Notes

- ⚡️ Currently Newest Svelte version (v4.2.9).
- 🔐 Newest Supabase auth v0.11 PKCE (Proof Key for Code Exchange).
- 🎨 Newest Skeleton v2.7.1
- 📱 Phone navbar support
- 🔒 I use +page.ts where it's safe (where I don't use any private keys like Subscription page, Profile page etc).
  - But if it uses private keys make sure to hide into +server.ts and +page.server.ts. Private keys SHOULD NEVER be sent to the client.
- ❤️ Send a PR or create a branch if you want to colaborate.

## Quick setup

- Download the code with github CLI or anything you like.

```bash
gh repo clone feavel1/4S-Stack
```

#### Setup Supabase

- I recommend to setup a clean project. [Supabase Dashboard](https://supabase.com/dashboard/projects)
- I decided to use the Supabase Stripe subscription template, you can find in "SQL editor -> Welcome -> Quick Start -> [Stripe Subscription](https://supabase-sql.vercel.app/stripe-subscriptions)".

  - I think that this template is created by [Thor](https://github.com/thorwebdev). But he originaly made it for [Next.js](https://github.com/vercel/nextjs-subscription-payments). He is very talanted.
- Copy the supabase keys to the .env.example file. You can remove .example and make sure .gitignore ignore's the .env file while uploading to github.
- After uploading to github you can move on to the server side setup.

#### Setup Vercel

- To setup the webhook, you will have to upload your project to vercel, and add the keys that you currently have in .env to the vercel environment.
- You will need this domain to connect to your stripe webhook in the next step. So make sure you copy https://your-domain.vercel.app/

#### Setup Stripe webhook

- After that create a Stripe account (you don't have to verify your account, because I can not verify mine, because I am under Unitad States 🇺🇸 sanctions, because I am Russian 🇷🇺 btw. FREE WORLD DEMOCRACY 😅) If you are interested in colaborating, email me lol, I check email everyday. Btw I speek Chinese 🇨🇳 btw.

  - After that you can get your stripe keys. And set up the webhook. Make sure to say U! S! A!. Some time it calms the big brother corporations.
- Next copy the https://your-domain.vercel.app/api/webhook to stripe and create the webhook. Make sure to tag 'Listen to all events'.

  - Now you should be good to go. If you have any errors related to webhooks you can slowly and stedily debug them one by one form the 'Vercel logs' tab.
  - If the error is related to supabase, you can debug it from supabase logs, most likely it is related to the RLS. You can try to disable it and debug, but be sure to lay low.
- Add and sync the stripe webhook env key to vercel.

##### Some errors that I had to debug:

So there was one related to saving the custumer portal on stripe, you have to first create the templates on stripe, add your colors, icons etc. After that it started to open.

Also there were some errors related to RLS as I said above, but those can be debuged from supabase log. Make sure to setup RLS properly.
