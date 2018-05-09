using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AppTest
{

    [TestFixture]
    class UIMenuTest
    {

        //[Test]
        //public void CompanyDetailsTest()
        //{
        //    UILoginTest login = new UILoginTest();
        //    login.SuccessLoginTest();
        //    driver.FindElement(By.Id("CompanyDetailsButton")).Click();
        //    Thread.Sleep(5000);
        //    IWebElement element = driver.FindElement(By.Id("CompanyNameTextBox"));
        //    Assert.That(element != null, Is.True);
        //}


        [Test]
        public void SuccessLoginTest()
        {
            IWebDriver driver = new FirefoxDriver();
            driver.Url = "http://localhost:3065/src/index.html";
            Thread.Sleep(15000);
            driver.FindElement(By.Id("UserNameBox")).SendKeys("Béla");
            driver.FindElement(By.Id("PasswordBox")).SendKeys("23456");
            driver.FindElement(By.Id("LoginButton")).Click();
            Thread.Sleep(15000);
            IWebElement element = driver.FindElement(By.Id("navBlock"));
            Assert.That(element != null, Is.True);
        }
    }
}
