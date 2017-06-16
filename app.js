var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: 'oX7HaSnIQFc1HND3q9KcFQDFi',
  consumer_secret: 'zmUjcR6vvMoGNYWjru4DT8c87YtpguIRfCAi11ur03vS0UvgWg',
  bearer_token: 'AAAAAAAAAAAAAAAAAAAAACBP1AAAAAAAEtiR1417kioVjU5SeevBNie97bM%3DApyAQpJ3pDGYkM3kUpBoAeoa3lzY9iUE3Rt6xskm6iD5ntfAqd'
});
var Autolinker = require( 'autolinker' );

var handle = "Tolga_Egilmezel";
handle = handle.toLowerCase();

client.get('users/show', {'screen_name': handle}, function(error, response) {
  if (!error) {
    console.log(response);

    var name = response.name;
    handle = response.screen_name;
    var description = response.description;
    var imageUrl = response.profile_image_url_https;
    var location = response.location;
    var profileColor = response.profileColor;

    imageUrl = response.profile_image_url_https.replace("_normal", "_400x400");

    


  }
});



var firebase = require('firebase');
var admin = require('firebase-admin');
var serviceAccount = {
  "type": "service_account",
  "project_id": "women-who-digital",
  "private_key_id": "e3245605e48daed3938078c5a349c836829b08be",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDC64D++GMu9pIe\n8qvEeUK1+/SNv82EEj6QsyCtnnnWIMvD+EPOn/ZzAe7VbarR4t2/tyzOB8FhoQYY\nXQtp6aTQyMFZ+xP2R8cn61WnNm7XWNwpSPkA7aoHibYfHqAWdBp1R6StLGY8g6t1\nPlnhV5696pos5SHxRD6UzNbxnCsGu28+MwZ75dTOLyBQ1MeBgQT+DvT9HXlSRJco\nINJ3l1EE/0iShJVSqXGP7DLJEqK3sTlYCtJtCh/hpGyLiE96aluEGCVto/hBMOQj\nl5tyBFuf8cga5hwjXQ6Mj5XRu6BK5BpFg6KA+QiV/Bl/ZyOM7FJ1Zf/pgtdLXrBc\n/Q4/EJfZAgMBAAECggEACwT3WPK/4LLN1fQQI95bGCCzVaQnQTUq1lFaIpaX+rQF\n8QFDDBZc/2l3kBdQFeeGc8UuQkOL+jH5Pz1bXNR5ndgLnkOkgELUjnwubnKUV5ZN\ndAQNF7FX8G8nnaDEmiBcMo8nTyb4bKlg8xLgT+39Km1t4+XcQmCCTTU7XZNfl1S9\n+jMAdNECr50BG7rmIFHG15XefhsL5XBtegQmknO+FDEynmml4AddCAoq9F7SdvDJ\ngsFhWU3BcGY+nLj5QRByAGpodHkUb2id2Rwi/tKnqQrG+GM6bQa6/mNGn6mu2nku\nEVdPqAWIobYqYkc7VpbEkxzumfEq6YR4up+tkMYjUQKBgQD1O7sbczmxXXglP9Pt\na78PP979I8ipsZzMA1FaaqCGAwztm84fnEtIA7VsKtu8ESwwGRLAZDLzJtSvV5lv\nYRFDS58yvD0mVp+CKtnxjuL5nfhtqwV093hiCFkFaVYh02xpsXnmXWJhX56KhDyV\n400XuvQk0eDsBb8xUMLWu2f8XQKBgQDLekgyWnMZhDifq8cHU+Gp63cP9xMIHUgr\ntYXXXHi5vPhPhU7dhEHCf3yQIiJAst7UWaXFJxjnEghCNu7O0ourDw5F5H7fJh/6\njdnHQXhpAd/s1vRtY8ftvBfQzzCZnEsV5+ToMvvVWfa8ws+C9xIxi/oznN19XL5d\ndep3mp5xrQKBgQDfIyptH7svF81ql1lOfuuqBIPx8c10GpiBScOMcdj+F2h8C3jS\nanRVYoqBkb2+siFy4l2dkY6KkJqVsS97mOcMRJLmp0E80TTyS+tjUJBWcNbLcwHU\nHBj9mnrl4aLtxGKxCTvR0Mbjsw2fHBPEjr5nCUV8+zudht0hEks29+72QQKBgFbW\nY/NhWJe+LvAtvi3pZXg/7jsZBb1DyeYlfO4xH7Cc7hf523N8GxhnkgBtINMdwy06\n6R0fl2gd8PpZOUd44XRqY3v+jQqs2Z7zZMq9rSabTzZjckMw/0T9LejGU4ZrBjxe\nD/nssD8YOs3KEgdhbBlLFMdsHbZ/mxqF1T+f9BitAoGBANh1WnDCYzyUkxMi9Fv9\ngAtddUPsTUdUIafaWzS5Bu4aHKSQqHWR3Zb3WeLrv/Xdirij6VC7Vqs4u/yHq/cl\nUve+EWfnGB5geySwKjAZrGiG+7pSi46VBv7AWuCHo2KABw/9kNgu+cOwkkqjiUMk\nagPV2UFZPXKzu5/RThX8nSJs\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-r43zc@women-who-digital.iam.gserviceaccount.com",
  "client_id": "111494301087242304135",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-r43zc%40women-who-digital.iam.gserviceaccount.com"
};

// var Autolinker = require( 'autolinker' );



// handle = handle.toLowerCase();

// imageUrl = response.profile_image_url_https.replace("_normal", "_400x400");
