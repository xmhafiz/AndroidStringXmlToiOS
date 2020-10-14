### Android strings.xml to iOS Localizable.string

To convert Android `strings.xml` Into iOS `Localizable.string` like a boss, without copy-pasting just because of having different format.

Note: only apply to valid format of Android strings.xml file.

### HowTo

- Run `npm install`
- Then `node apps.js`

### Example

This is the file named as `strings.xml` will be coverted..

```xml
<resources>
    <string name="btn_login">Login</string>
    <string name="welcome_message">Hello World!</string>
    <string name="btn_save">Save</string>
    <string name="btn_register">Register</string>
</resources>

```

into `Localizable.string`

```string
"btn_login"="Login"
"welcome_message"="Hello World!"
"btn_save"="Save"
"btn_register"="Register"
```