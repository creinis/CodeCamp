import socket
import ipaddress
from common_ports import ports_and_services

def get_open_ports(target, port_range, verbose=False):
    try:
        ip_address = socket.gethostbyname(target)
        hostname = socket.getfqdn(ip_address)
    except socket.gaierror:
        try:
            ipaddress.ip_address(target)
        except ValueError:
            return "Error: Invalid IP address"
        else:
            return "Error: Invalid hostname"

    open_ports = []

    for port in range(port_range[0], port_range[1] + 1):
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        result = sock.connect_ex((ip_address, port))
        sock.close()
        if result == 0:
            open_ports.append(port)

    if verbose:
        if target == ip_address or hostname == "":
            verbose_output = f"Open ports for {target}\nPORT     SERVICE\n"
        else:
            verbose_output = f"Open ports for {hostname} ({ip_address})\nPORT     SERVICE\n"
        for port in open_ports:
            service_name = ports_and_services.get(port, "unknown")
            verbose_output += f"{str(port).ljust(9)}{service_name}\n"
        return verbose_output.rstrip()
    else:
        return open_ports
