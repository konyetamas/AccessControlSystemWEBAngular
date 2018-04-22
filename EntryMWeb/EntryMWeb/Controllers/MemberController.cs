using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DataBase;
using EntryMWeb.Model;
using EntryMWeb.DAL;

namespace EntryMWeb.Controllers
{
    public class MemberController : ApiController
    {

        [HttpGet]
        [ActionName("GetMemberById")]
        public MemberModel GetMemberById(int MemberId)
        {
            MemberModel result = new MemberModel();
            try
            {
                result = MemberDAL.GetMemberById(MemberId);
            }
            catch (Exception e)
            {

            }
            return result;
        }

        [HttpGet]
        [ActionName("GetMembersByCompany")]
        public List<MemberModel> GetMembersByCompany(int CompanyId)
        {
            List<MemberModel> result = new List<MemberModel>();
            try
            {               
                result = MemberDAL.GetMembersByCompanyId(CompanyId);
            }
            catch (Exception e)
            {

            }
            return result;
        }


       

        [HttpPost]
        [ActionName("EditMember")]
        public void EditMember(MemberModel model)
        {
            try
            {
                MemberDAL.EditMember(model);
            }
            catch (Exception e)
            {

            }
        }


        //[HttpPost]
        //public Action AddNewMember(MemberModel member)
        //{

        //    try
        //    {
        //        result = MemberDAL.GetMemberById(MemberId);
        //    }
        //    catch (Exception e)
        //    {

        //    }
        //    return result;
        //}
    }
}
