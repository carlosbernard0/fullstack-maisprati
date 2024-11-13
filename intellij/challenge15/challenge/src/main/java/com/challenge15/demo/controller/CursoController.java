package com.challenge15.demo.controller;

import com.challenge15.demo.dto.CursoDTO;
import com.challenge15.demo.entity.AlunoEntity;
import com.challenge15.demo.service.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/cursos")
public class CursoController {

    @Autowired
    private CursoService cursoService;

    @GetMapping
    public List<CursoDTO> getAllCourses() {
        return cursoService.getAllCourses();
    }

    @GetMapping("/{id}")
    public CursoDTO getCourseById(@PathVariable Integer id) {
        return cursoService.getCourseById(id);
    }

    @PostMapping
    public CursoDTO createCourse(@RequestBody CursoDTO courseDTO) {
        return cursoService.createCourse(courseDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CursoDTO> updateCourse(@PathVariable Integer id, @RequestBody CursoDTO courseDTO) {
        CursoDTO updatedCourse = cursoService.updateCourse(id, courseDTO);
        return updatedCourse != null ? ResponseEntity.ok(updatedCourse) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Integer id) {
        cursoService.deleteCourse(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{cursoId}/alunos")
    public ResponseEntity<Set<AlunoEntity>> listarAlunosDeCurso(@PathVariable Long cursoId) {
        Set<AlunoEntity> alunos = cursoService.listarAlunosDeCurso(cursoId);
        return ResponseEntity.ok(alunos);
    }
}
