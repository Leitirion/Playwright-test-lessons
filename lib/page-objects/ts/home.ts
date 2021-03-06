const navBarLocator = 'nav';
const navBarAssertionsDropDownLocator = '#assertionsDropdown';
const navBarWebFormsDropDownLocator = '#webFormsDropdown';

const browserTypeButtonLocator = '#browser_type';
const browserTypesLocator = '#browser_div';
const browserChromeTrueFalseLocator = '.output-chrome';
const browserEdgeTrueFalseLocator = '.output-edge';
const browserFireFoxTrueFalseLocator = '.output-firefox';
const browserOperaTrueFalseLocator = '.output-opera';

const homepageUrlRegex = /^http:\/\/localhost\:[1-9][0-9]{3}\/$/g;

class HomePage {

  url() {
    return "/";
  }

  isHomePageUrl(pageUrl){
    // Use regular expression (regex) to check Home page is correct
    //
    // Expect a URL lke http://localhost:NNNN/
    //
    // You can test out your regex at sites like
    //         https://www.regextester.com/
    //
    
    // There should be 1 match

    const numberMatches = pageUrl.match(homepageUrlRegex).length;
    return numberMatches == 1;
  }

  navBar() {
    return navBarLocator;
  }

  navBarAssertionsDropDownField() {
    return navBarAssertionsDropDownLocator;
  }

  navBarWebFormsDropDownField() {
    return navBarWebFormsDropDownLocator
  }

  browserTypeButton() {
    return browserTypeButtonLocator;
  }

  browserTypes() {
    return browserTypesLocator;
  }

  browserNameChromium() {
    return 'chromium';
  }
  
  browserChromiumLocatorClass() {
    return '.output-chromium';
  }

  browserNameFirefox() {
    return 'firefox';
  }
  
  browserFirefoxLocatorClass() {
    return '.output-firefox';
  }

  browserNameWebkit() {
    return 'webkit';
  }
  
  browserWebkitLocatorClass() {
    return '.output-webkit';
  }

  // Are we using the given broser - true/false

  browserValueField(browserName) {
    if (browserName === 'Chrome') {
      return this.browserChromeValueField();
    } else if (browserName === 'Edge') {
      return this.browserEdgeValueField();
    } else if (browserName === 'Firefox') {
      return this.browserFireFoxValueField();
    } else if (browserName === 'Opera') {
      return this.browserOperaValueField();
    } else {
      throw new Error("Browser was not recognized =" + browserName);
    }
  }

  // Are we using Chrome - true/false

  browserChromeValueField() {
    return browserChromeTrueFalseLocator;
  }

  // Are we using  Edge - true/false

  browserEdgeValueField() {
    return browserEdgeTrueFalseLocator;
  }

  // Are we using  Firefox - true/false

  browserFireFoxValueField() {
    return browserFireFoxTrueFalseLocator;
  }

  //  Are we using Opera - true/false

  browserOperaValueField() {
    return browserOperaTrueFalseLocator;
  }
}
export default HomePage;