namespace Manutenzioni.Api.Errors
{
    public class CodeErrorResponse
    {
        public int StatusCode { get; set; }
        public string? Message { get; set; }

        public CodeErrorResponse(int statusCode, string? message = null)
        {
            StatusCode = statusCode;
            Message = message ?? GetCodeMassageStatusCode(statusCode);
        }

        private string GetCodeMassageStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "La richiesta inviata ha degli errori",
                401 => "Non hai autorizzazione per questa risorsa",
                404 => "Riquesta risorsa non trovata",
                500 => "Ci sono stati errori nel server",
                _ => string.Empty
            };
        }
    }
}
