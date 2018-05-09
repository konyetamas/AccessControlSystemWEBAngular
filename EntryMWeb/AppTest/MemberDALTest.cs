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
    public class MemberDALTest
    {
        [Test]
        public void AddNewMemberTest()
        {
            MemberModel model = new MemberModel();
            model.FirstName = "TestFirstName";
            model.CardNumber = "1111";
            model.Title = "TestTitle";
            CompanyDAL companyDAL = new CompanyDAL();
            model.CompanyId = companyDAL.GetCompanies().Select(x => x.Id).Min();
            MemberDAL memberDAL = new MemberDAL();
            memberDAL.AddNewMember(model);
            List<MemberModel> membersbycompany = new List<MemberModel>();
            membersbycompany = memberDAL.GetMembersByCompanyId(model.CompanyId);
            MemberModel testmodel = membersbycompany.Where(x => x.FirstName== "TestFirstName").FirstOrDefault();        
            Assert.That(testmodel != null, Is.True);

        }


        [Test]
        public void EditMemberTest()
        {
            MemberModel model = new MemberModel();
            MemberDAL memberDAL = new MemberDAL();
            CompanyDAL companyDAL = new CompanyDAL();
            model.Id = memberDAL.GetMembersByCompanyId(companyDAL.GetCompanies().Select(x => x.Id).Min()).Select(x=>x.Id).Max();
            model.FirstName = "TestEditFirstName";
            model.LastName = "TestEditLastName";
            model.CardNumber = "22222";
            model.Title = "testTitle";
            memberDAL.EditMember(model);
            MemberModel testmodel = memberDAL.GetMembersByCompanyId(companyDAL.GetCompanies().Select(x => x.Id).Min()).Where(x => x.FirstName == "TestEditFirstName").FirstOrDefault();
            Assert.That(testmodel != null, Is.True);

        }

    }
}
