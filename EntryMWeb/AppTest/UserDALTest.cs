using EntryMWeb.DAL;
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
    public class UserDALTest
    {
        [Test]
        public void AddNewUserTest()
        {
            UserModel model = UserDAL.GetUsers().Where(x => x.Id == UserDAL.GetUsers().Select(t => t.Id).Max()).FirstOrDefault();
            UserModel loginresult = UserDAL.CheckUserAutenthication(model.Name, model.Password);
            Assert.That(loginresult != null, Is.True);

        }
    }
}
