---
title: Site Offline

form:
    name: login
    action:
    method: post
    login:
        forgot_button: false

    fields:
        - name: username
          type: text
          placeholder: PLUGIN_LOGIN.USERNAME
          label: PLUGIN_LOGIN.USERNAME
          autofocus: true
          outerclasses: 'control field'
          classes: 'input is-large'

        - name: password
          type: password
          placeholder: PLUGIN_LOGIN.PASSWORD
          label: PLUGIN_LOGIN.PASSWORD
          outerclasses: 'control field'
          classes: 'input is-large'

---