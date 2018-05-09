using EntryMWeb.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataBase;


namespace EntryMWeb.Repositry
{
    interface IEntryRepository
    {
        List<EntryModel> GetEntriesByCompanyId(int CompanyId);
    }
}
