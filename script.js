

/*Simulador de cálculo de total de facturas de transporte mexicanas las cuales se 
componen en su forma más básica de Flete, IVA y una Retención solo en los casos en que corresponda*/

let opcion
let fleteFactura
let ivaFactura
let retencionFactura
let totalFactura
let ivaCalculado
let retencionCalculada

ivaFactura = .16
retencionFactura = .04

opcion = 1

while (opcion != 3) {

    opcion = prompt("Ingresa el número de la opción seleccionada para calcular el total de la factura de transporte: \n 1. Con IVA y Retención \n 2. Solo con IVA \n 3. Salir ")

    if (opcion == null) {

        break

    } else {

        opcion = Number(opcion)


        if ((opcion == 1) || (opcion == 2)) {

            switch (opcion) {
                case 1:
                    fleteFactura = prompt("Ingresa el Flete de la factura")

                    if (fleteFactura != null) {

                        fleteFactura = Number(fleteFactura)

                        if (fleteFactura > 0) {

                            ivaCalculado = fleteFactura * ivaFactura

                            retencionCalculada = fleteFactura * retencionFactura

                            totalFactura = fleteFactura + ivaCalculado - retencionCalculada

                            alert("El total de la factura de transporte es: \nFlete: " + fleteFactura + "\nIVA: " + ivaCalculado + "\nRetención: " + retencionCalculada + "\nTotal: " + totalFactura)
                        } else {
                            alert("No se ingresó una cantidad válida")
                        }

                    }
                    break

                case 2:

                    fleteFactura = prompt("Ingresa el Flete de la factura")

                    if (fleteFactura != null) {

                        fleteFactura = Number(fleteFactura)
                        
                        if (fleteFactura > 0) {

                            ivaCalculado = fleteFactura * ivaFactura

                            totalFactura = fleteFactura + ivaCalculado

                            alert("El total de la factura de transporte es: \nFlete: " + fleteFactura + "\nIVA: " + ivaCalculado + "\nTotal: " + totalFactura)

                        } else {
                            alert("No se ingresó una cantidad válida")
                        }
                    }

                    break

                default:

                    break
            }
        } else {

            if (opcion != 3) {
                alert("No se ingresó una opción válida")
            }
        }
    }
}
