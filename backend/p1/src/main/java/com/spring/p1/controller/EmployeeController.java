package com.spring.p1.controller;

import com.spring.p1.expection.ResourceNotFoundException;
import com.spring.p1.model.Employee;
import com.spring.p1.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

    @Autowired
    private EmployeeRepo employeerepo;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees()
    {
        return employeerepo.findAll();
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee)
    {
        return employeerepo.save(employee);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id)
    {
        Employee emp =  employeerepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee doesn't exists"));
        return ResponseEntity.ok(emp);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id,@RequestBody Employee employee)
    {
        Employee emp = employeerepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee doesn't exists"));
        emp.setFirstName(employee.getFirstName());
        emp.setLastName(employee.getLastName());
        emp.setEmailId(employee.getEmailId());

        Employee updatedEmployee = employeerepo.save(emp);
        return ResponseEntity.ok(updatedEmployee);
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable long id)
    {
        Employee emp = employeerepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee doesn't exists"));
        employeerepo.delete(emp);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
