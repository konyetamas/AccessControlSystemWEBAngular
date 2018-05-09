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
            CompanyDAL companyDAL = new CompanyDAL();
            int companyId = companyDAL.GetCompanies().Select(x => x.Id).Max();
            CompanyModel model = new CompanyModel() { Id = companyId, Address = "testAddress" };
            companyDAL.EditCompany(model);

            CompanyModel company = new CompanyModel();
            company = companyDAL.GetCompanies().Where(x => x.Address == "testAddress" && x.Id==companyId).FirstOrDefault();
            Assert.That(company != null, Is.False);

        }

    }
}
