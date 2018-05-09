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
            UserDAL userDAL = new UserDAL();
            UserModel model = userDAL.GetUsers().Where(x => x.Id == userDAL.GetUsers().Select(t => t.Id).Max()).FirstOrDefault();
            UserModel loginresult = userDAL.CheckUserAutenthication(model.Name, model.Password);
            Assert.That(loginresult != null, Is.True);

        }
    }
}
