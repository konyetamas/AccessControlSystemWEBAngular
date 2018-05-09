using DataBase;
using EntryMWeb.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntryMWeb.Repositry
{
    interface IMemberRepository
    {
        MemberModel GetMemberById(int Id);

        List<MemberModel> GetMembersByCompanyId(int CompanyId);

        void AddNewMember(MemberModel model);

        void EditMember(MemberModel model);

        List<MemberModel> GetMembersOfCompany(int CompanyId);


    }
}
