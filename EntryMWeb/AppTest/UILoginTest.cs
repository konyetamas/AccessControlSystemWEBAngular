using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using NUnit.Framework;
using OpenQA.Selenium.Firefox;
using System.Threading;

namespace AppTest
{
   [TestFixture]
    public class UILoginTest
    {
        IWebDriver driver;

       [SetUp]
        public void Init()
        {
            driver = new FirefoxDriver();
        }

        [Test]
        public void FailedLoginTest()
        {
          
            driver.Url="http://localhost:3065/src/index.html";
            Thread.Sleep(15000);
            driver.FindElement(By.Id("LoginButton")).Click();
            Thread.Sleep(10000);
            IWebElement element = driver.FindElement(By.Id("LoginButton"));
            Assert.That(element != null, Is.True);
        }


        [Test]
        public void SuccessLoginTest()
        {
          
            driver.Url = "http://localhost:3065/src/index.html";
            Thread.Sleep(15000);
            driver.FindElement(By.Id("UserNameBox")).SendKeys("Béla");
            driver.FindElement(By.Id("PasswordBox")).SendKeys("23456");
            driver.FindElement(By.Id("LoginButton")).Click();
            Thread.Sleep(15000);
            IWebElement element = driver.FindElement(By.Id("navBlock"));
            Assert.That(element != null, Is.True);
        }

        


        [Test]
        public void CompanyDetailsButtonTest()
        {
           
            SuccessLoginTest();
            driver.FindElement(By.Id("CompanyDetailsButton")).Click();
            Thread.Sleep(5000);
            IWebElement element = driver.FindElement(By.Id("CompanyNameTextBox"));
            Assert.That(element != null, Is.True);
        }

        [Test]
        public void CompanyMembersButtonTest()
        {

            SuccessLoginTest();
            driver.FindElement(By.Id("MembersButton")).Click();
            Thread.Sleep(5000);
            IWebElement element = driver.FindElement(By.Id("MembersList"));
            Assert.That(element != null, Is.True);
        }

        [Test]
        public void EntriesButtonTest()
        {

            SuccessLoginTest();
            driver.FindElement(By.Id("EntriesButton")).Click();
            Thread.Sleep(5000);
            IWebElement element = driver.FindElement(By.Id("EntriesList"));
            Assert.That(element != null, Is.True);
        }

        [Test]
        public void InboxMessagesButtonTest()
        {

            SuccessLoginTest();
            driver.FindElement(By.Id("InboxMessagesButton")).Click();
            Thread.Sleep(5000);
            IWebElement element = driver.FindElement(By.Id("InboxMessagesList"));
            Assert.That(element != null, Is.True);
        }

        [Test]
        public void OutboxMessagesButtonTest()
        {

            SuccessLoginTest();
            driver.FindElement(By.Id("OutboxMessagesButton")).Click();
            Thread.Sleep(5000);
            IWebElement element = driver.FindElement(By.Id("OutboxMessagesList"));
            Assert.That(element != null, Is.True);
        }


        [Test]
        public void EditMemberPopupTest()
        {

            SuccessLoginTest();
            driver.FindElement(By.Id("OutboxMessagesButton")).Click();
            Thread.Sleep(5000);
            IWebElement element = driver.FindElement(By.Id("OutboxMessagesList"));
            Assert.That(element != null, Is.True);
        }

        [Test]
        public void AddNewMemberPopupTest()
        {

            SuccessLoginTest();
            driver.FindElement(By.Id("OutboxMessagesButton")).Click();
            Thread.Sleep(5000);
            IWebElement element = driver.FindElement(By.Id("OutboxMessagesList"));
            Assert.That(element != null, Is.True);
        }


        [Test]
        public void AddNewMessagePopupTest()
        {

            SuccessLoginTest();
            driver.FindElement(By.Id("OutboxMessagesButton")).Click();
            Thread.Sleep(5000);
            IWebElement element = driver.FindElement(By.Id("OutboxMessagesList"));
            Assert.That(element != null, Is.True);
        }







    }
}
