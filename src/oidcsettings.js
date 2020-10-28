var OidcSettings = {    
    authority: 'https://connect.test.surfconext.nl/oidc/authorize',
    client_id: 'uniconnect-authtest.netlify.app/',
    redirect_uri: 'https://uniconnect-authtest.netlify.app/',    
    response_type: 'id_token token',
    scope: 'openid profile roles',
    post_logout_redirect_uri: 'https://uniconnect-authtest.netlify.app/logout'      
};