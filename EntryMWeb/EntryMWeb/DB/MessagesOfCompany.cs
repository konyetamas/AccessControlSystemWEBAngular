//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace EntryMWeb.DB
{
    using System;
    using System.Collections.Generic;
    
    public partial class MessagesOfCompany
    {
        public int CompanyId { get; set; }
        public int MessageFromBuildingId { get; set; }
        public int Id { get; set; }
    
        public virtual Company Company { get; set; }
        public virtual MessageFromBuilding MessageFromBuilding { get; set; }
    }
}
