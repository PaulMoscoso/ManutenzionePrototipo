using System.ComponentModel.DataAnnotations;

namespace Manutenzioni.Domain.Models
{
    public class MA_CustSupp
    {
        [Key]
        public string CustSupp { get; set; }
        public string CompanyName { get; set; }
    }
}
