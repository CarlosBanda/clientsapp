export async function PdfConsumption(consumos){
    let html = `
        <div>        
            <span>
                <strong>${consumos}</strong>
            </span>
        </div>
    `
    return html
}

