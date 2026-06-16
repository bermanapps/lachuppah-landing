# Email Setup for lachuppah.app

This project uses two separate email services:

1. ImprovMX — for receiving/forwarding email
2. Resend — for sending email from the website/app

## Receiving / Forwarding Email

We are using ImprovMX to forward email.

Current forwarding setup:

support@lachuppah.app → reuvenberman@gmail.com

ImprovMX is only for forwarding incoming mail. It is not being used for sending emails from the app.

In Namecheap, the domain is set to Custom MX under:

Namecheap → Domain List → lachuppah.app → Manage → Advanced DNS → Mail Settings

The root domain MX records point to ImprovMX:

```
MX Record:
Host:     @
Value:    mx1.improvmx.com
Priority: 10
TTL:      Automatic

MX Record:
Host:     @
Value:    mx2.improvmx.com
Priority: 20
TTL:      Automatic
```

**Important:** We are NOT relying on Namecheap Redirect Email anymore. Email forwarding is handled by ImprovMX.

---

## Sending Email

We are using Resend to send emails from the website/app.

Resend is used for outgoing emails, for example from addresses like:

noreply@lachuppah.app

The Resend API key should be stored in Vercel as:

```
RESEND_API_KEY
```

Do not hardcode the Resend API key in the project.

---

## Resend DNS Records

Resend requires DNS records in Namecheap.

The DKIM TXT record is in Host Records:

```
Type:  TXT Record
Host:  resend._domainkey
Value: The long p=MIGf... DKIM value from Resend
TTL:   Automatic
```

The SPF TXT record is also in Host Records:

```
Type:  TXT Record
Host:  send
Value: v=spf1 include:amazonses.com ~all
TTL:   Automatic
```

The Resend MX record is in Mail Settings / Custom MX:

```
Type:     MX Record
Host:     send
Value:    The feedback-smtp...amazonses.com value shown inside Resend
Priority: 10
TTL:      Automatic
```

This Resend MX record is for the `send` subdomain only. It should not affect normal incoming email such as support@lachuppah.app.

---

## Important Rules

Do not enable Resend Receiving unless we intentionally want Resend to handle incoming email.

| Direction | Flow |
|-----------|------|
| Incoming  | support@lachuppah.app → ImprovMX → reuvenberman@gmail.com |
| Outgoing  | Website/app → Resend → user/customer |

Namecheap is only managing DNS. It is not the actual email forwarding service anymore.

---

## Troubleshooting

### If support@lachuppah.app stops forwarding

1. Check ImprovMX and make sure the support alias still forwards to reuvenberman@gmail.com
2. Check Namecheap Mail Settings and make sure Custom MX is still active
3. Check that `@` points to `mx1.improvmx.com` and `mx2.improvmx.com`

### If Resend sending stops working

1. Check Resend domain verification
2. Check the TXT record for host `send`
3. Check the DKIM TXT record for host `resend._domainkey`
4. Check the MX record for host `send`
5. Check that `RESEND_API_KEY` exists in Vercel environment variables
6. Redeploy the Vercel project after changing environment variables
