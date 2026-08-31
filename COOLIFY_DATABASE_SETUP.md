# Coolify — إعداد قاعدة البيانات والنشر

## فشل النشر (Deployment Failed)

### السبب الحقيقي (من السجل)
```
error: writing to file: No space left on device
nix-env -if .nixpacks/nixpkgs-...
Generating nixpacks configuration
```

1. **Coolify ما زال على Nixpacks** — يحمّل مئات MB من Nixpkgs على السيرفر
2. **قرص السيرفر ممتلئ** — لا يمكن البناء محلياً

**الحل: لا تبنِ على السيرفر.** اسحب الصورة الجاهزة من GitHub.

---

### الحل A (الوحيد الموصى به): Docker Image جاهز

الصورة مبنية على GitHub Actions وتُرفع تلقائياً:

```
ghcr.io/meklads/turriva:latest
```

#### خطوات Coolify
1. **أوقف** محاولات Redeploy على Nixpacks
2. **New Resource → Docker Image** (أو Docker Compose مع `docker-compose.yaml` في المستودع)
3. Image: `ghcr.io/meklads/turriva:latest`
4. **Port** = `3000`
5. Environment Variables:
   - `DATABASE_URL`
   - `AUTH_SECRET`
   - `AUTH_URL` = `https://turriva.com`
   - `NEXT_PUBLIC_APP_URL` = `https://turriva.com`
   - `GOOGLE_SITE_VERIFICATION` = *(from Search Console)*
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` = `turriva.com` *(or `NEXT_PUBLIC_GA_MEASUREMENT_ID`)*
   - `RESEND_API_KEY` + `RESEND_FROM_EMAIL` *(lead + portfolio notifications)*
6. إذا ظهر `unauthorized`: GitHub → **Packages → turriva → Package settings → Change visibility → Public**  
   أو أضف Registry في Coolify (PAT مع `read:packages`)
7. **Deploy** — يسحب الصورة فقط (بدون build)

#### تنظيف قرص السيرفر (اختياري)
على السيرفر:
```bash
docker system prune -af
docker builder prune -af
```

---

### الحل B: Dockerfile من المستودع

1. افتح تطبيق turriva.com في Coolify
2. **Configuration → General → Build Pack → Dockerfile** (ليس Nixpacks)
3. **Port** = `3000`
4. **Save** → **Redeploy**

---

### الحل C: إبقاء Nixpacks

تم تخفيف البناء (`build:deploy` + `.nixpacksignore`). إن استمر الفشل مع `Killed` في السجل → زِد **Swap** على السيرفر أو استخدم الحل A.

---

## المشكلة
```
Environment variable not found: DATABASE_URL
```
التطبيق شغّال لكن **PostgreSQL غير مربوط** في Coolify.

---

## الحل (5 دقائق)

### الخطوة 1: أنشئ PostgreSQL
1. افتح **Coolify Dashboard**
2. اذهب لنفس الـ **Project** اللي فيه ruwaq
3. اضغط **+ New Resource** → **Database** → **PostgreSQL**
4. اختر نفس السيرفر (localhost)
5. اضغط **Deploy** وانتظر حتى يصير **Running**

### الخطوة 2: اربط القاعدة بالتطبيق
1. افتح تطبيق **ruwaq** (موقع ruwaq.co)
2. اذهب لتبويب **Environment Variables**
3. ابحث عن زر **Connect to Database** أو **Link Database**
4. اختر الـ PostgreSQL اللي أنشأته
5. Coolify يضيف `DATABASE_URL` تلقائياً

### الخطوة 3: أضف باقي المتغيرات
| Variable | Value |
|----------|-------|
| `AUTH_SECRET` | أي نص عشوائي 32 حرف (مثال: `openssl rand -base64 32`) |
| `AUTH_URL` | `https://ruwaq.co` |
| `NEXT_PUBLIC_APP_URL` | `https://ruwaq.co` |

### الخطوة 4: Redeploy
1. اضغط **Redeploy** على تطبيق ruwaq
2. انتظر 2–3 دقائق

### الخطوة 5: تحقق
افتح: `https://ruwaq.co/api/health`

**المطلوب:**
```json
{
  "ok": true,
  "app": true,
  "db": true,
  "tables": true
}
```

إذا `"db": false` → `DATABASE_URL` ما زال غلط.

---

## إذا ما لقيت "Link Database"

أضف يدوياً في Environment Variables:

```
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DATABASE
```

خذ القيم من تطبيق PostgreSQL في Coolify → **Connection Details**.

---

## بعد النجاح
جرّب **Generate Proposal** مرة ثانية — يفترض يشتغل.
