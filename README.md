

# Google Form Auto-Submitter

A simple JavaScript utility to programmatically send data from a web application to a Google Form using `fetch` and `FormData`.

## ⚙️ Configuration

To use this script, you must modify the `FORM_URL` to point to the **response endpoint** instead of the standard viewing link.

### 1. The URL Transformation

Google Forms provides a "Sharing" link by default. You must manually change the suffix:

* **Default:** `.../viewform`
* **Required:** `.../formResponse`

> [!CAUTION]
> If the URL ends in `/viewform`, the script will successfully fire but Google will **not** record the data.

### 2. Matching Entry IDs

The `entryIDs` array must correspond to the indexes of your `choice` array.

* `choice[0]` → `entry.2064523558`
* `choice[1]` → `entry.2082307258`
* `choice[2]` → `entry.1372808003`

---

## 🛠️ Installation & Usage

1. **Export your data**: Ensure your choices are exported as an array from `storedChoice.js`.
2. **Update the ID**: Replace the ID in the `FORM_URL` with your specific form's unique ID.
3. **Run the script**: The function will iterate through your array and submit all answers in a single POST request.

```javascript
// Example logic in googleForm.js
answerArray.forEach((answer, index) => {
    if (entryIDs[index]) {
        formData.append(entryIDs[index], answer);
    }
});

```

---

## 🔒 Form Settings Checklist

For the automation to work without errors, verify these settings in your Google Form:

* [ ] **Limit to 1 response**: Disabled.
* [ ] **Restrict to users in [Organization]**: Disabled.
* [ ] **Show link to submit another response**: Enabled (optional, but helpful for testing).

---

## 📝 License

This project is open-source and free to use.

---

**Would you like me to show you how to add a "Success" message on your website so users don't have to rely on a browser alert?**
