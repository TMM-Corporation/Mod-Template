// This is a Template source for mod, that uses template native module, that is created in src/build/native/template

alert("Template mod loaded!")

var TemplateNativeModule = WRAP_NATIVE("TemplateNativeModule")
alert("Received value from native : " + TemplateNativeModule.hello(2, 1))