## ezlocale
    a library for localization very easy to use

### useage 

- load i18n config
~~~javascript
ezlocale.load([
    {
        file:"languages/en_US.txt",
        name:"en_US"
    },
    {
        file:"languages/zh_CN.txt",
        name:"zh_CN"
    }
])
~~~

- switch language pack
~~~javascript
use('en_US')
~~~

- localized string
~~~javascript
localized("key");

localized("key{$1},{$2}","v1","v2")
~~~

