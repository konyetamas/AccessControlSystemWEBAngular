using EntryMWeb.DAL;
using DataBase;
using EntryMWeb.Model;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppTest
{
    [TestFixture]
    public class MessageDALTest
    {
        [Test]
        public void AddNewMessageTest()
        {
            MessageFromCompanyModel model = new MessageFromCompanyModel();
            model.Subject = "TestMessage";
            model.Text = "TestValue";
            model.CompanyId = CompanyDAL.GetCompanies().Select(x => x.Id).Min();
            MessageDAL.AddNewMessage(model);
            MessageFromCompanyModel testmodel = MessageDAL.GetMessagesByCompany(model.CompanyId).Where(x => x.Subject == "TestMessage" && x.Text == "TestValue").FirstOrDefault();
            Assert.That(testmodel != null, Is.True);
        }
    }
}
