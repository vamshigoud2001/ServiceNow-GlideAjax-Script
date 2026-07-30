if (isLoading || newValue === '') {
        return;
    }
    var GA = new GlideAjax('HelloWorld');
    GA.addParam('sysparm_name', 'Function1');
    GA.addParam('sysparm_ref', g_form.getValue('cmdb_ci'));
    GA.getXML(HelloWorldParse)

    function HelloWorldParse(response) {
        var answer = response.responseXML.documentElement.getAttribute('answer');
        alert(answer);
    }

}
