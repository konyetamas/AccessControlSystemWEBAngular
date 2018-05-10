using EntryMWeb.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataBase;
using EntryMWeb.Repositry;

namespace EntryMWeb.DAL
{
    public class EntryDAL : IEntryRepository
    {
        public List<EntryModel> GetEntriesByCompanyId(int CompanyId)
        {

            AccessControlSystemEntities context = new AccessControlSystemEntities();
            try
            {
                List<Entry> entries = (from x in context.Entries
                                       from y in context.Members
                                       where x.MemberId == y.Id
                                       where y.CompanyId == CompanyId
                                       select x
                                       ).ToList();
                                      
                List<EntryModel> entryModels = new List<EntryModel>();
                foreach (Entry item in entries)
                {
                    entryModels.Add(MapToEntryModel(item, context));
                }
                return entryModels;
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
            return null;
        }


        private EntryModel MapToEntryModel(Entry entryDataBase, AccessControlSystemEntities context)
        {
            EntryModel entryModel = new EntryModel();
            entryModel.Id = entryDataBase.Id;
            entryModel.MemberName = (from x in context.Members
                                     where x.Id == entryDataBase.MemberId
                                     select x.FirstName + x.LastName
                                      ).FirstOrDefault();

            entryModel.CompanyName = (from x in context.Members
                                      where x.Id == entryDataBase.MemberId
                                      from y in context.Companies
                                      where y.Id== x.CompanyId
                                      select y.Name
                                      ).FirstOrDefault();

            entryModel.EntryDate = (DateTime)entryDataBase.Time;
            return entryModel;
        }
    }
}
