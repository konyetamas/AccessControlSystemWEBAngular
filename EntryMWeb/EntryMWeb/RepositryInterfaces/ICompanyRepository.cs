using DataBase;
using EntryMWeb.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntryMWeb.Repositry
{
    interface ICompanyRepository
    {
        List<CompanyModel> GetCompanies();
        CompanyModel GetCompanyById(int Id);
        void EditCompany(CompanyModel model);
    }
}
