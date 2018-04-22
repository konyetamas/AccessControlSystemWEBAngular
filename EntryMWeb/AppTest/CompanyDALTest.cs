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
    public class CompanyDALTest
    {
        [Test]
        public void EditCompanyTest()
        {
            int companyId = CompanyDAL.GetCompanies().Select(x => x.Id).Max();
            CompanyModel model = new CompanyModel() { Id = companyId, Address = "testAddress" };
            CompanyDAL.EditCompany(model);

            CompanyModel company = new CompanyModel();
            company = CompanyDAL.GetCompanies().Where(x => x.Address == "testAddress" && x.Id==companyId).FirstOrDefault();
            Assert.That(company != null, Is.True);

        }

    }
}
